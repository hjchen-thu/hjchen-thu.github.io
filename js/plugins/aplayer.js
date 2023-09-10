const audioList = [];
const isFixed = Global.theme_config.plugins.aplayer.type == "fixed"
const isMini = Global.theme_config.plugins.aplayer.type == "mini"



for (const audio of Global.theme_config.plugins.aplayer.audios) {
    const a = {
      name: audio.name,
      artist: audio.artist,
      url: audio.url,
      cover: audio.cover,
      lrc: audio.lrc,
      theme: audio.theme,
    };
    audioList.push(a);
}




if (isMini) {
  const ap = new APlayer({
      container: document.getElementById('aplayer'),
      mini: true,
      autoplay: true,
      audio: audioList,
  });
} else if (isFixed) {
  const ap = new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,

      audio: audioList,
  });
}


// import { createBot } from "botui"
// import { BotUI, BotUIMessageList, BotUIAction } from "@botui/react"
 
// const myBot = createBot()


// const MyBot = () => {
//   useEffect(() => {
//     myBot
//       .wait({ waitTime: 1000 })
//       .then(() => myBot.message.add({ text: "hello, what is your name?" }))
//       .then(() =>
//         myBot.action.set(
//           {
//             options: [
//               { label: "John", value: "john" },
//               { label: "Jane", value: "jane" },
//             ],
//           },
//           { actionType: "select" }
//         )
//       )
//       .then((data) =>
//         myBot.message.add({ text: `nice to meet you ${data.selected.label}` })
//       )
//   }, [])
 
//   return (
//     <div>
//       <BotUI bot={myBot}>
//         <BotUIMessageList />
//         <BotUIAction />
//       </BotUI>
//     </div>
//   )
// }