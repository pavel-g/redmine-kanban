import {CustomCardMetadataModel} from "./custom-card-metadata-model";
import ReactTrello from "react-trello";
import {DefaultCurrentUserRulesConst} from "../const/default-current-user-rules-const";
import {CustomCardUserModel} from "./custom-card-user-model";
import {RedmineUser} from "./redmine-user";

const DEFAULT_USER_FIELD = 'dev'

/**
 * Data for custom card for ReactTrello
 */
export class CustomCardModel implements ReactTrello.Card<CustomCardMetadataModel> {

  metadata: CustomCardMetadataModel

  id: string

  title: string

  description: string

  currentUser: CustomCardUserModel|null

  users: {
    qa: CustomCardUserModel|null,
    cr: CustomCardUserModel|null,
    dev: CustomCardUserModel|null
  } = {qa: null, cr: null, dev: null}

  private rules = DefaultCurrentUserRulesConst

  constructor(data: CustomCardMetadataModel) {
    this.metadata = data
    this.id = `issue_${data.issueNumber}`
    this.title = `${data.redmineIssueData.tracker.name} #${data.issueNumber}`
    this.description = `${data.redmineIssueData.subject}`
    this.currentUser = this.getCurrentUser()
    this.users.qa = this.getUserModelFromProperty('qa')
    this.users.cr = this.getUserModelFromProperty('cr')
    this.users.dev = this.getUserModelFromProperty('dev')
  }

  private getCurrentUser(): CustomCardUserModel|null {
    const status = this.metadata.redmineIssueData.status.name
    const rule = this.rules.find(rule => {
      return Boolean(
        rule.statuses.indexOf(status) >= 0
      )
    })
    const propertyName = rule ? rule.metadataPropertyName : DEFAULT_USER_FIELD
    return this.getUserModelFromProperty(propertyName)
  }

  private getUserModelFromProperty(propertyName: string): CustomCardUserModel|null {
    if (!this.metadata.customFields) {
      return null
    }
    const customFields: Record<string, RedmineUser|null|undefined> = this.metadata.customFields
    if (!customFields[propertyName]) {
      return null
    }
    const redmineUser = customFields[propertyName]
    if (!redmineUser) {
      return null
    }
    const rule = this.rules.find(rule => rule.metadataPropertyName === propertyName)
    return new CustomCardUserModel(redmineUser, rule?.label || "")
  }

}