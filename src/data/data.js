const notes = new Array(15)//[undef, undef...15 times]
  .fill(1) //[1,1,1,1,...]
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  })) //change to an object

module.exports = notes