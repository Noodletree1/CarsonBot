module.exports = {
  name: 'purge',
  description: 'removes things from chat',
  async execute(message){
  //  const voiceChannel = message.member.voice.channel;
//    const permissions = voiceChannel.permissionsFor(message.client.user);
//    if (permissions.hasPermission("MANAGE_MESSAGES")) {
//      Purge();
//    }
//    else{
//      return message.channel.send("I need the permissions to join and speak in your voice channel!");
//    }
Purge();

async function Purge(){
    const args = message.content.split(" ");
    message.delete();
    message.channel.bulkDelete(10)
      .catch(error => message.channel.send(`Error: ${error}`));
    }
  }
}
