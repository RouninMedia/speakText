function speakText(textToSpeak, lang='en-GB', volume=1, pitch=0.95, rate=1) {

  const announcement = new SpeechSynthesisUtterance();
  announcement.pitch = pitch;
  announcement.rate = rate;
  announcement.volume = volume;
  announcement.lang = lang;
  announcement.text = textToSpeak;
  window.speechSynthesis.speak(announcement);
}

speakText(`I'm sorry Dave, I'm afraid I can't do that.`);
