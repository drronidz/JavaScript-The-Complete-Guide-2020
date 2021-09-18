class DOMHelper {
    static moveElement(elementID, newDestinationSelector) {
        const element = document.getElementById(elementID)
        const destinationElement = document.querySelector(newDestinationSelector)
        destinationElement.append(element)
    }

    static clearEventListeners(element) {
        const clonedElement = element.cloneNode(true)
        element.replaceWith(clonedElement)
        return clonedElement
    }
}

class Component {
    constructor(hostElementID, insertBefore = false) {
        if(hostElementID) {
            this.hostElement = document.getElementById(hostElementID)
        } else {
            this.hostElement = document.body
        }
        this.insertBefore = insertBefore
    }
    element;
    detach () {
        if(this.element) {
            this.element.remove()
            // this.element.parentElement.removeChild(this.element)
        }
    }

    attach() {
        console.log('The tooltip...')
        //document.body.append(this.element)
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? 'afterbegin' : 'beforeend',
            this.element
        )
    }
}

class Tooltip extends Component{
    constructor(closeNotifierFunction) {
        super('active-projects', true)
        this.closeNotifierFunction = closeNotifierFunction
        this.create()
    }
    closeTooltip = () => {
        this.detach()
        this.closeNotifierFunction()
    }

    create() {
        const tooltipElement = document.createElement('div')
        tooltipElement.className = 'card'
        tooltipElement.textContent = 'The tooltip !!!'
        tooltipElement.addEventListener('click', this.closeTooltip)
        this.element = tooltipElement
    }

}

class ProjectItem {
    hasActiveTooltip = false
    constructor(id, updateProjectsListFunction, type) {
        this.id = id;
        this.updateProjectsListFunction = updateProjectsListFunction
        this.connectMoreInfoButton()
        this.connectSwitchButton(type)
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id)
        const moreInfoButton = projectItemElement.querySelector('button:first-of-type')
        moreInfoButton.addEventListener('click', this.showMoreInformationHandler)
    }

    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id)
        let switchButton = projectItemElement.querySelector('button:last-of-type')
        switchButton = DOMHelper.clearEventListeners(switchButton)
        switchButton.textContent = type === "active" ? 'Finish' : "Activate"
        switchButton.addEventListener('click', this.updateProjectsListFunction.bind(null, this.id))
    }

    showMoreInformationHandler() {
        if(this.hasActiveTooltip) {
            // When the tool tip is active (Nothing to do!!)
        }else {
            const tooltip = new Tooltip(() => {
                this.hasActiveTooltip = false
            });
            tooltip.attach()
            this.hasActiveTooltip = true
        }
    }

    update(updateProjectListsFunction, type) {
        this.updateProjectsListFunction = updateProjectListsFunction
        this.connectSwitchButton(type)
    }
}

class ProjectList {
    projects = []

    constructor(type) {
        this.type = type

        const projectItems = document.querySelectorAll(`#${type}-projects li`)
        for (const projectItem of projectItems) {
            this.projects.push(
                new ProjectItem(projectItem.id, this.switchProject.bind(this), this.type))
        }
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandlerFunction = switchHandlerFunction
    }

    addProject(project) {
        console.log(project)
        this.projects.push(project)
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`)
        project.update(this.switchProject.bind(this), this.type)
    }

    switchProject(projectID) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1)
        console.log(this.projects.find(p => p.id === projectID))
        this.switchHandlerFunction(this.projects.find(p => p.id === projectID))
        this.projects = this.projects.filter(p => p.id !== projectID)
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active')
        const finishedProjectList = new ProjectList('finished')

        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList))

        finishedProjectList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList))
    }
}

App.init()