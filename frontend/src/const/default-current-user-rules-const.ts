export const DefaultCurrentUserRulesConst = [
  {
    statuses: ['Code Review'],
    fromCustomField: 'Code Reviewer',
    label: 'CR',
    metadataPropertyName: 'cr'
  },
  {
    statuses: ['Resolved', 'Testing'],
    fromCustomField: 'Quality Assurance',
    label: 'QA',
    metadataPropertyName: 'qa'
  },
  {
    statuses: ['New', 'In Progress', 'Feedback', 'Re-opened', 'Wait Release', 'Pending',
      'Confirming', 'Closed', 'Rejected', 'Frozen'],
    fromCustomField: '',
    label: 'Исп',
    metadataPropertyName: 'dev'
  }
]