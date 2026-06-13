import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { commitmentPlansDescription } from './resources/commitment-plans';

export class AzureMachinelearningCommitmentplans implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Machinelearning Commitmentplans',
                name: 'N8nDevAzureMachinelearningCommitmentplans',
                icon: { light: 'file:./azure-machinelearning-commitmentplans.png', dark: 'file:./azure-machinelearning-commitmentplans.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'APIs manage Azure ML Commitment Plans and child Commitment Association resources, supporting CRUD operations.',
                defaults: { name: 'Azure Machinelearning Commitmentplans' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMachinelearningCommitmentplansApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Commitment Plans",
					"value": "Commitment Plans",
					"description": ""
				}
			],
			"default": ""
		},
		...commitmentPlansDescription
                ],
        };
}
