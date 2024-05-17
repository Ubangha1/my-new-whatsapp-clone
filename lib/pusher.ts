import PusherServer from 'pusher'
import PusherClient from 'pusher-js'


export const pusherServer = new PusherServer({
    appId: "1804336", // Use your Pusher app ID
    key: "e7378ea037d5fafafb89", // Use your Pusher key
    secret: "1d7202feb55f02e92b6d", // Use your Pusher secret
    cluster: "eu",
    useTLS: true
 })

 export const pusherClient = new PusherClient(
     'e7378ea037d5fafafb89', // Replace with your Instance ID
     {
         channelAuthorization: {
             endpoint: '/api/pusher/auth',
             transport: 'ajax'
         },
         cluster: 'eu'
     }
 )


 