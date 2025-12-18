import db from '../db/client';

export default defineNitroPlugin((nitroApp) => {
  (nitroApp.hooks as any).hook("request", (event: any) => {
    event.context.db = db;
  });  
});