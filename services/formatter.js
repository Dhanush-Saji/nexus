
export const toISTConverter = (time) => {
    let newTime = new Date(time).toLocaleTimeString("en-US",{
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      return newTime;
};