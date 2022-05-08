function generateRandomNum(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    moodInfo: ['happy','sad','thoughtful','grateful','shocked','guilty','energetic','enraged','depressed'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one','be careful','spend some time with family','watch movie'],
    emoji: ['🥰','🙈','😂','😇','🤪']
  }
  
  // Store wisdom in array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optIdx = generateRandomNum(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'moodInfo':
        personalWisdom.push(`Your mood right now is a "${collectiveWisdom[prop][optIdx]}".`)
        break
      case 'fortuneOutput':
        personalWisdom.push(`You are having: "${collectiveWisdom[prop][optIdx]}".`)
        break
      case 'advice':
        personalWisdom.push(`You should: "${collectiveWisdom[prop][optIdx]}".`)
        break
      case 'emoji':
        personalWisdom.push(`Your emoji is: "${collectiveWisdom[prop][optIdx]}".`)
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    const formattedWisdom = personalWisdom.join('\n')
    console.log(formattedWisdom)
  }
  
  formatWisdom(personalWisdom);