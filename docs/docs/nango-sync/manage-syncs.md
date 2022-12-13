import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Manage Syncs

Nango lets you adapt and control Syncs over time. 

Syncs can be managed with Nango's SDKs, REST API and soon an Admin Dashboard. 

Nango's SDKs and REST API let you embed managing capabilities in your product, so that your end users can perform actions such as: 
- Refresh a Sync
- Stop a Sync
- View when the next Sync job is due (or when the last on ran)
- View how many records were created/updated

### Pause a Sync

<Tabs groupId="programming-language">
  <TabItem value="node" label="Node SDK">

```ts
import { Nango } from '@nangohq/node-client'

nango.pause(123); // Param is the 'sync_id' returned upon Sync creation.
```
  </TabItem>
  <TabItem value="curl" label="REST API (curl)">

  ```json
  curl --request PUT \
--url http://localhost:3003/v1/syncs \
 --header "Content-type: application/json" \
 --data '{
    "action": "pause",
    "sync_id": 123
  }'
  ```
  </TabItem>
</Tabs>

### Resume a Sync

<Tabs groupId="programming-language">
  <TabItem value="node" label="Node SDK">

```ts
import { Nango } from '@nangohq/node-client'

nango.resume(123); // Param is the 'sync_id' returned upon Sync creation.
```
  </TabItem>
  <TabItem value="curl" label="REST API (curl)">

  ```json
  curl --request PUT \
--url http://localhost:3003/v1/syncs \
 --header "Content-type: application/json" \
 --data '{
    "action": "resume",
    "sync_id": 123
  }'
  ```
  </TabItem>
</Tabs>

### Cancel a Sync

<Tabs groupId="programming-language">
  <TabItem value="node" label="Node SDK">

```ts
import { Nango } from '@nangohq/node-client'

nango.cancel(123); // Param is the 'sync_id' returned upon Sync creation.
```
  </TabItem>
  <TabItem value="curl" label="REST API (curl)">

  ```json
  curl --request PUT \
--url http://localhost:3003/v1/syncs \
 --header "Content-type: application/json" \
 --data '{
    "action": "cancel",
    "sync_id": 123
  }'
  ```
  </TabItem>
</Tabs>

### Trigger a Sync job

<Tabs groupId="programming-language">
  <TabItem value="node" label="Node SDK">

```ts
import { Nango } from '@nangohq/node-client'

nango.trigger(123); // Param is the 'sync_id' returned upon Sync creation.
```
  </TabItem>
  <TabItem value="curl" label="REST API (curl)">

  ```json
  curl --request PUT \
--url http://localhost:3003/v1/syncs \
 --header "Content-type: application/json" \
 --data '{
    "action": "trigger",
    "sync_id": 123
  }'
  ```
  </TabItem>
</Tabs>

## Problems with your Sync? We are here to help!

If you need help or run into issues, please reach out! We are online and responsive all day on the [Slack Community](https://nango.dev/slack).