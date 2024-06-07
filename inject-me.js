const Shimmer = require('shimmer');

const dogs = ["https:\/\/images.dog.ceo\/breeds\/rottweiler\/n02106550_3528.jpg","https:\/\/images.dog.ceo\/breeds\/airedale\/n02096051_9327.jpg","https:\/\/images.dog.ceo\/breeds\/frise-bichon\/jh-ezio-1.jpg","https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_712.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-russell\/little1.jpg","https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_9074.jpg","https:\/\/images.dog.ceo\/breeds\/coonhound\/n02089078_1064.jpg","https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-toy\/n02087046_924.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-japanese\/n02085782_3855.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_9933.jpg","https:\/\/images.dog.ceo\/breeds\/hound-blood\/n02088466_10506.jpg","https:\/\/images.dog.ceo\/breeds\/elkhound-norwegian\/n02091467_2966.jpg","https:\/\/images.dog.ceo\/breeds\/bluetick\/n02088632_4633.jpg","https:\/\/images.dog.ceo\/breeds\/buhund-norwegian\/hakon2.jpg","https:\/\/images.dog.ceo\/breeds\/stbernard\/n02109525_243.jpg","https:\/\/images.dog.ceo\/breeds\/chihuahua\/n02085620_575.jpg","https:\/\/images.dog.ceo\/breeds\/hound-plott\/hhh_plott002.jpg","https:\/\/images.dog.ceo\/breeds\/tervuren\/yoda_in_car.jpg","https:\/\/images.dog.ceo\/breeds\/retriever-flatcoated\/n02099267_2268.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_7718.jpg","https:\/\/images.dog.ceo\/breeds\/chow\/n02112137_12685.jpg","https:\/\/images.dog.ceo\/breeds\/poodle-toy\/n02113624_3165.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-norfolk\/n02094114_2990.jpg","https:\/\/images.dog.ceo\/breeds\/vizsla\/n02100583_14017.jpg","https:\/\/images.dog.ceo\/breeds\/retriever-flatcoated\/n02099267_2314.jpg","https:\/\/images.dog.ceo\/breeds\/entlebucher\/n02108000_2452.jpg","https:\/\/images.dog.ceo\/breeds\/briard\/n02105251_1382.jpg","https:\/\/images.dog.ceo\/breeds\/pug\/n02110958_12025.jpg","https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_7553.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-toy\/n02087046_2316.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-japanese\/n02085782_38.jpg","https:\/\/images.dog.ceo\/breeds\/briard\/n02105251_7816.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-cocker\/n02102318_9197.jpg","https:\/\/images.dog.ceo\/breeds\/schipperke\/n02104365_6529.jpg","https:\/\/images.dog.ceo\/breeds\/rottweiler\/n02106550_4063.jpg","https:\/\/images.dog.ceo\/breeds\/maltese\/n02085936_899.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-silky\/n02097658_8095.jpg","https:\/\/images.dog.ceo\/breeds\/tervuren\/shadow_and_frisbee.jpg","https:\/\/images.dog.ceo\/breeds\/kelpie\/n02105412_1222.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-sealyham\/n02095889_6045.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-lakeland\/n02095570_6175.jpg","https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_19124.jpg","https:\/\/images.dog.ceo\/breeds\/hound-english\/n02089973_3401.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_2224.jpg","https:\/\/images.dog.ceo\/breeds\/groenendael\/n02105056_4713.jpg","https:\/\/images.dog.ceo\/breeds\/spaniel-brittany\/n02101388_4113.jpg","https:\/\/images.dog.ceo\/breeds\/schnauzer-giant\/n02097130_978.jpg","https:\/\/images.dog.ceo\/breeds\/akita\/Akita_Dog.jpg","https:\/\/images.dog.ceo\/breeds\/schnauzer-giant\/n02097130_3215.jpg"]
module.exports.patchListeners = function (emitter) {

    const listeners = emitter.listeners('request');
    emitter.removeAllListeners('request');
    for (let i = 0; i < listeners.length; ++i) {
        const list = listeners[i];
        const holder = { list };
        Shimmer.wrap(holder, 'list', (original) => {
            return function (req, res) {
                console.log(req.method, req.url);
                if (req.url.includes('cat') || req.url === '/') {
                    res.end(`<html><body><div>
                    <div style="  width: 100%;
                    display: flex;
                    overflow: auto;
                    min-height: 100vh;
                    align-items: center;
                    flex-direction: column;
                    justify-content: flex-start;
                    background-color: #242525;">
                      <span style="color: #ffffff;">
                        <date-time-primitive
                          format="DD/MM/YYYY"
                          date="Fri Jan 26 2024 08:52:11 GMT+0200 (Israel Standard Time)"
                        ></date-time-primitive>
                      </span>
                      <h1 style="color: #fbfbfb;
                      height: 81px;
                      align-self: stretch;
                      text-align: center;
                      padding-top: 8px;">Dog Of The Day</h1>
                      <img src="${dogs[Math.floor((Math.random() * 50) + 1)]}"/>
                    </div>
                  </div></body></html>`);
                    return;
                }
                return original.apply(this, arguments);
            }
        });
        emitter.on('request', holder.list);
    }
};
