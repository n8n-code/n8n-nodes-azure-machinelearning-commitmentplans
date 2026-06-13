import type { INodeProperties } from 'n8n-workflow';

export const commitmentPlansDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Commitment Plans"
					]
				}
			},
			"options": [
				{
					"name": "Commitment Plans Remove",
					"value": "Commitment Plans Remove",
					"action": "Commitment Plans Remove",
					"description": "Remove an existing Azure ML commitment plan.",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroupName\"]}}/providers/Microsoft.MachineLearning/commitmentPlans/{{$parameter[\"commitmentPlanName\"]}}"
						}
					}
				},
				{
					"name": "Commitment Plans Get",
					"value": "Commitment Plans Get",
					"action": "Commitment Plans Get",
					"description": "Retrieve an Azure ML commitment plan by its subscription, resource group and name.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/subscriptions/{{$parameter[\"subscriptionId\"]}}/resourceGroups/{{$parameter[\"resourceGroupName\"]}}/providers/Microsoft.MachineLearning/commitmentPlans/{{$parameter[\"commitmentPlanName\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commitment Plans"
					],
					"operation": [
						"Commitment Plans Remove"
					]
				}
			}
		},
		{
			"displayName": "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearning/commitmentPlans/{commitmentPlanName}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Commitment Plans"
					],
					"operation": [
						"Commitment Plans Get"
					]
				}
			}
		},
];
