const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

sendMarsTemperature = () => {
    setTimeout(() => {
        const marsTemp = getMarsTemperature();
        console.log(`Mars temperature is: ${marsTemp} degree Celsius`)
    }, messageDelay())
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo