import { Nango, NangoHttpMethod } from '@nangohq/node-client';

// CLI command: npm start syncHubspotContactsWithAuth
// Endpoint docs: https://developers.hubspot.com/docs/api/crm/contacts
export let syncHubspotContactsWithAuth = async () => {
    let config = {
        method: NangoHttpMethod.POST,
        headers: {
            authorization: "Bearer ${pizzlyAccessToken}"
        },
        body: {
            limit: 10
        },
        paging_cursor_request_path: 'after',
        paging_cursor_metadata_response_path: 'paging.next.after',
        response_path: 'results',
        unique_key: 'id',
        max_total: 30,
        pizzly_connection_id: '1',
        pizzly_provider_config_key: 'hubspot'
    };

    return new Nango().sync('https://api.hubapi.com/crm/v3/objects/contacts/search', config);
};