const Role = require('../../models/role');
const roles = require('../../../roles.json');
const Settings = require('../../models/settings');
const settingsJson = require('../../../settings.json');
const User = require('../../models/user');
const users = require('../../../users.json');
const ServerAudit = require('../../models/server-audit');

(async function() {
  try{
  for (let i = 0; i < roles.length; i++) {
      roles[i].name = roles[i].name.trim();

      const role = await Role.create(roles[i]);
      console.log(`role ${role.name} created.`);

      await ServerAudit.create({
        userid: null,
        username: 'System',        
        action: `System created role ${role.name} with a value of ${role.value}.`
      }); 
      
      
        for (let i = 0; i < users.length; i++) {
      users[i].username = users[i].username.trim();

      const user = await User.create(users[i]);
      console.log(`User ${user.username} created.`);

      await ServerAudit.create({
        userid: null,
        username: 'System',        
        action: `System created user account ${user.username} (id: ${user._id}).`
      });
    }
   }
  } catch(error){
    console.error(`[ERROR at import-all.js]:  ${error}`)
  }
})();