module.exports = async function App(context) {

  if (context.event.isText ) {
    // Case where the sent media is the known string
    if (context.event.text === 'comment vas-tu ?'){
      await context.sendText('Très bien ?' ,  {
        quickReplies: [
          {
            contentType: 'text',
            title: 'Je vais bien, merci.',
            payload: '<DEVELOPER_DEFINED_PAYLOAD>',
          },
          {
            contentType: 'text',
            title: 'Non, ça ne va pas.',
            payload: '<DEVELOPER_DEFINED_PAYLOAD>',
          },
        ],
      })
    }
    // Image media event
    else if (context.event.isImage) {
      await context.sendText('Je ne sais pas traiter ce type de demande')
    }
    // In any other case sending back what the user sent. 
    else {
      await context.sendText(context.event.text)
    }
  }


};

