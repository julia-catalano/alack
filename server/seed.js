const db = require('./src/db')
const {green, red} = require('chalk')

const {Title} = require('./src/db/models/storedTitles')


const titles = [{
  title: 'Pride and Prejudice',
  author: 'Jane Austen',
  text: 'Mr. Bennet was among the earliest of those who waited on Mr. Bingley. He had always intended to visit him, though to the last always assuring his wife that he should not go; and till the evening after the visit was paid she had no knowledge of it. It was then disclosed in the following manner. Observing his second daughter employed in trimming a hat, he suddenly addressed her with I hope Mr. Bingley will like it, Lizzy. We are not in a way to know what Mr. Bingley likes, said her mother resentfully, since we are not to visit. But you forget, mamma, said Elizabeth, that we shall meet him at the assemblies, and that Mrs. Long promised to introduce him. I do not believe Mrs. Long will do any such thing. She has two nieces of her own. She is a selfish, hypocritical woman, and I have no opinion of her. No more have I, said Mr. Bennet; and I am glad to find that you do not depend on her serving you. Mrs. Bennet deigned not to make any reply, but, unable to contain herself, began scolding one of her daughters. Dont keep coughing so, Kitty, for Heavens sake! Have a little compassion on my nerves. You tear them to pieces. Kitty has no discretion in her coughs, said her father; she times them ill. I do not cough for my own amusement, replied Kitty fretfully. When is your next ball to be, Lizzy? To-morrow fortnight. Aye, so it is, cried her mother, and Mrs. Long does not come back till the day before; so it will be impossible for her to introduce him, for she will not know him herself. Then, my dear, you may have the advantage of your friend, and introduce Mr. Bingley to her. Impossible, Mr. Bennet, impossible, when I am not acquainted with him myself; how can you be so teasing? I honour your circumspection. A fortnights acquaintance is certainly very little. One cannot know what a man really is by the end of a fortnight. But if we do not venture somebody else will; and after all, Mrs. Long and her nieces must stand their chance; and, therefore, as she will think it an act of kindness, if you decline the office, I will take it on myself. The girls stared at their father. Mrs. Bennet said only, Nonsense, nonsense! What can be the meaning of that emphatic exclamation? cried he. Do you consider the forms of introduction, and the stress that is laid on them, as nonsense? I cannot quite agree with you there. What say you, Mary? For you are a young lady of deep reflection, I know, and read great books and make extracts. Mary wished to say something sensible, but knew not how. While Mary is adjusting her ideas, he continued, let us return to Mr. Bingley. “I am sick of Mr. Bingley,” cried his wife. I am sorry to hear that; but why did not you tell me that before? If I had known as much this morning I certainly would not have called on him. It is very unlucky; but as I have actually paid the visit, we cannot escape the acquaintance now. The astonishment of the ladies was just what he wished; that of Mrs. Bennet perhaps surpassing the rest; though, when the first tumult of joy was over, she began to declare that it was what she had expected all the while. How good it was in you, my dear Mr. Bennet! But I knew I should persuade you at last. I was sure you loved your girls too well to neglect such an acquaintance. Well, how pleased I am! and it is such a good joke, too, that you should have gone this morning and never said a word about it till now. Now, Kitty, you may cough as much as you choose, said Mr. Bennet; and, as he spoke, he left the room, fatigued with the raptures of his wife. What an excellent father you have, girls! said she, when the door was shut. I do not know how you will ever make him amends for his kindness; or me, either, for that matter. At our time of life it is not so pleasant, I can tell you, to be making new acquaintances every day; but for your sakes, we would do anything. Lydia, my love, though you are the youngest, I dare say Mr. Bingley will dance with you at the next ball. Oh! said Lydia stoutly, I am not afraid; for though I am the youngest, Im the tallest. The rest of the evening was spent in conjecturing how soon he would return Mr. Bennets visit, and determining when they should ask him to dinner.',
  bookUrl: 'https://i.pinimg.com/originals/61/54/96/6154962f998843c53da9018fddbbbff7.jpg',
  year: 1813 ,
  sentimentRank: null
},
{
  title: 'Mrs. Dalloway',
  author: 'Virginia Woolf',
  text: 'MRS. DALLOWAY said she would buy the flowers herself. For Lucy had her work cut out for her. The doors would be taken off their hinges; Rumpelmayer s men were coming. And then, thought Clarissa Dalloway, what a morning-fresh as if issued to children on a beach. What a lark! What a plunge! For so it had always seemed to her, when, with a little squeak of the hinges, which she could hear now, she had burst open the French windows and plunged at Bourton into the open air. How fresh, how calm, stiller than this of course, the air was in the early morning; like the flap of a wave; the kiss of a wave; chill and sharp and yet (for a girl of eighteen as she then was) solemn, feeling as she did, standing there at the open window, that something awful was about to happen; looking at the flowers, at the trees with the smoke winding off them and the rooks rising, falling; standing and looking until Peter Walsh said, Musing among the vegetables?-was that it?-I prefer men to cauliflowers-was that it? He must have said it at breakfast one morning when she had gone out on to the terrace-Peter Walsh. He would be back from India one o£ these days, June or July, she forgot which, for his letters were awfully dull; it was his sayings one remembered; his eyes, his pocket-knife, his smile, his grumpiness and, when millions of things had utterly vanished-how strange it was!-a few sayings like this about cabbages. She stiffened a little on the kerb, waiting for Durtnall s van to pass. A charming woman, Scrope Purvis thought her (knowing her as one does know people who live next door to one in Westminster); a touch of the bird about her, of the jay, blue-green, light, vivacious, though she was over fifty, and grown very white since her illness. There she perched, never seeing him, waiting to cross, very upright. For having lived in Westminster-how many years now? over twenty,-one feels even in the midst of the traffic, or waking at night, Clarissa was positive, a par-ticular hush, or solemnity; an indescribable pause; a suspense (but that might be her heart, affected, they said, by influenza) before Big Ben strikes. There! Out it boomed. First a warning, musical; then the hour, ir-revocable. The leaden circles dissolved in the air. Such fools we are, she thought, crossing Victoria Street. For Heaven only knows why one loves it so, how one sees it so, making it up, building it round one, tumbling it, creating it every moment afresh; but the veriest frumps, the most dejected of miseries sitting on doorsteps (drink their downfall) do the same; can t be dealt with, she felt positive, by Acts of Parliament for that very reason: they love life. In people s eyes, in the swing, tramp, and trudge; in the bellow and the up-roar; the carriages, motor cars, omnibuses, vans, sand-wich men shuffling and swinging; brass bands; barrel organs; in the triumph and the jingle and the strange high singing of some aeroplane overhead was what she loved; life; London; this moment of June. For it was the middle of June. The War was over, except for some one like Mrs. Foxcroft at the Embassy last night eating her heart out because that nice boy was killed and now the old Manor House must go to a cousin; or Lady Bexborough who opened a bazaar, they said, with the telegram in her hand, John, her favourite, killed; but it was over; thank Heaven-over. It was June. The King and Queen were at the Palace. And everywhere, though it was still so early, there was a beating, a stirring of galloping ponies, tapping of cricket bats; Lords, Ascot, Ranelagh and all the rest of it; wrapped in the soft mesh of the grey-blue morning air, which, as the day wore on, would unwind them, and set down on their lawns and pitches the bouncing po-nies whose forefeet just struck the ground and up they sprung, the whirling young men, and laughing girls in their transparent muslins who, even now, after dancing all night, were taking their absurd woolly dogs for a run; and even now, at this hour, discreet old dowagers were shooting out in their motor cars on errands of mystery; and the shopkeepers were fidgeting in their windows with their paste and diamonds, their lovely old sea-green brooches in eighteenth-century settings to tempt Americans (but one must economise, not buy things rashly for Elizabeth), and she, too, loving it as she did with an absurd and faithful passion, being part of it, since her people were courtiers once in the time of the Georges, she, too, was going that very night to kindle and illuminate; to give her party. But how strange, on entering the Park, the silence; the mist; the hum; the slow-swimming happy ducks; the pouched birds waddling; and who should be coming along with his back against the Government buildings, most ap-propriately, carrying a despatch box stamped with the Royal Arms, who but Hugh Whitbread; her old friend Hugh-the admirable Hugh! Good-morning to you, Clarissa! said Hugh, rather extravagantly, for they had known each other as children. Where are you off to? I love walking in London, said Mrs. Dalloway. Really it s better than walking in the country. They had just come up-unfortunately-to see doc-tors. Other people came to see pictures; go to the opera; take their daughters out; the Whitbreads came to see doctors. Times without number Clarissa had visited Evelyn Whitbread in a nursing home. Was Evelyn ill again? Evelyn was a good deal out of sorts, said Hugh, intimating by a kind of pout or swell of his very well-covered, manly, extremely handsome, perfectly uphol-stered body (he was almost too well dressed always, but presumably had to be, with his little job at Court) that his wife had some internal ailment, nothing serious, which, as an old friend, Clarissa Dalloway would quite understand without requiring him to specify. Ah yes, she did of course; what a nuisance; and felt very sisterly and oddly conscious at the same time of her hat. Not the right hat for the early morning, was that it? For Hugh always made her feel, as he bustled on, raising his hat rather extravagantly and assuring her that she might be a girl of eighteen, and of course he was coming to her party to-night, Evelyn absolutely insisted, only a little late he might be after the party at the Palace to which he had to take one of Jim s boys,-she always felt a little skimpy beside Hugh; schoolgirlish; but attached to him, partly from having known him always, but she did think him a good sort in his own way, though Richard was nearly driven mad by him, and as for Peter Walsh, he had never to this day forgiven her for liking him. She could remember scene after scene at Bourton- Peter furious; Hugh not, of course, his match in any way, but still not a positive imbecile as Peter made out; not a mere barber s block. When his old mother wanted him to give up shooting or to take her to Bath he did it, without a word; he was really unselfish, and as for say-ing, as Peter did, that he had no heart, no brain, noth-ing but the manners and breeding of an English gentle-man, that was only her dear Peter at his worst; and he could be intolerable; he could be impossible; but ador-able to walk with on a morning like this. (June had drawn out every leaf on the trees. The mothers of Pimlico gave suck to their young. Messages were passing from the Fleet to the Admiralty. Arlington Street and Piccadilly seemed to chafe the very air in the Park and lift its leaves hotly, brilliantly, on waves of that divine vitality which Clarissa loved. To dance, to ride, she had adored all that.) For they might be parted for hundreds of years, she and Peter; she never wrote a letter and his were dry sticks; but suddenly it would come over her, If he were with me now what would he say?-some days, some sights bringing him back to her calmly, without the old bitterness; which perhaps was the reward of having cared for people; they came back in the middle of St. James s Park on a fine morning-indeed they did. But Peter-however beautiful the day might be, and the trees and the grass, and the little girl in pink-Peter never saw a thing of all that. He would put on his spec-tacles, if she told him to; he would look. It was the state of the world that interested him; Wagner, Pope s po-etry, people s characters eternally, and the defects of her own soul. How he scolded her! How they argued! She would marry a Prime Minister and stand at the top of a staircase; the perfect hostess he called her (she had cried over it in her bedroom), she had the makings of the perfect hostess, he said. So she would still find herself arguing in St. James s Park, still making out that she had been right-and she had too-not to marry him. For in marriage a little licence, a little independence there must be between people living together day in day out in the same house; which Richard gave her, and she him. (Where was he this morning for instance? Some committee, she never asked what.) But with Peter everything had to be shared; everything gone into. And it was intolerable, and when it came to that scene in the little garden by the fountain, she had to break with him or they would have been destroyed, both o£ them ruined, she was con-vinced; though she had borne about with her for years like an arrow sticking in her heart the grief, the an-guish; and then the horror of the moment when some one told her at a concert that he had married a woman met on the boat going to India! Never should she forget all that! Cold, heartless, a prude, he called her. Never could she understand how he cared. But those Indian women did presumably-silly, pretty, flimsy nincom-poops. And she wasted her pity. For he was quite happy, he assured her-perfectly happy, though he had never done a thing that they talked of; his whole life had been a failure. It made her angry still. She had reached the Park gates. She stood for a mo-ment, looking at the omnibuses in Piccadilly. She would not say of any one in the world now that they were this or were that. She felt very young; at the same time unspeakably aged. She sliced like a knife through everything; at the same time was outside, look-ing on. She had a perpetual sense, as she watched the taxi cabs, of being out, out, far out to sea and alone; she always had the feeling that it was very, very dan-gerous to live even one day. Not that she thought her-self clever, or much out of the ordinary. How she had got through life on the few twigs of knowledge Fraulein Daniels gave them she could not think. She knew noth-ing; no language, no history; she scarcely read a book now, except memoirs in bed; and yet to her it was ab-solutely absorbing; all this; the cabs passing; and she would not say of Peter, she would not say of herself, I am this, I am that. Her only gift was knowing people almost by in-stinct, she thought, walking on. If you put her in a room with some one, up went her back like a cat s; or she purred. Devonshire House, Bath House, the house with the china cockatoo, she had seen them all lit up once; and remembered Sylvia, Fred, Sally Seton-such hosts of people; and dancing all night; and the waggons plodding past to market; and driving home across the Park. She remembered once throwing a shilling into the Serpentine. But every one remembered; what she loved was this, here, now, in front of her; the fat lady in the cab. Did it matter then, she asked herself, walk-ing towards Bond Street, did it matter that she must in-evitably cease completely; all this must go on without her; did she resent it; or did it not become consoling to believe that death ended absolutely? but that somehow in the streets of London, on the ebb and flow of things, here, there, she survived, Peter survived, lived in each other, she being part, she was positive, of the trees at home; of the house there, ugly, rambling all to bits and pieces as it was; part of people she had never met; being laid out like a mist between the people she knew best, who lifted her on their branches as she had seen the trees lift the mist, but it spread ever so far, her life, her-self. But what was she dreaming as she looked into Hatchards  shop window? What was she trying to re-cover? What image of white dawn in the country, as she read in the book spread open:',
  bookUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIdUZmwDQu1RVbtnujiHrVhLI2yAFHwJWz-A0hSHJq7GYvVi2WLxC6If3gyuOzlP8yUlQc7T10WBO45GfO9TPWRXXJgF9Pz5CCLuwW_eCwMmeummJc557C&usqp=CAc',
  year: 1925,
  sentimentRank: null
},
{
  title: 'The Sun Also Rises',
  author: 'Ernest Hemingway',
  text: 'Robert Cohn was once middleweight boxing champion of Princeton. Do not think that I am very much impressed by that as a boxing title, but it meant a lot to Cohn. He cared nothing for boxing, in fact he disliked it, but he learned it painfully and thoroughly to counteract the feeling of inferiority and shyness he had felt on being treated as a Jew at Princeton. There was a certain inner comfort in knowing he could knock down anybody who was snooty to him, although, being very shy and a thoroughly nice boy, he never fought except in the gym. He was Spider Kellys star pupil. Spider Kelly taught all his young gentlemen to box like featherweights, no matter whether they weighed one hundred and five or two hundred and five pounds. But it seemed to fit Cohn. He was really very fast. He was so good that Spider promptly overmatched him and got his nose permanently flattened. This increased Cohns distaste for boxing, but it gave him a certain satisfaction of some strange sort, and it certainly improved his nose. In his last year at Princeton he read too much and took to wearing spectacles. I never met any one of his class who remembered him. They did not even remember that he was middleweight boxing champion. I mistrust all frank and simple people, especially when their stories hold together, and I always had a suspicion that perhaps Robert Cohn had never been middleweight boxing champion, and that perhaps a horse had stepped on his face, or that maybe his mother had been frightened or seen something, or that he had, maybe, bumped into something as a young child, but I finally had somebody verify the story from Spider Kelly. Spider Kelly not only remembered Cohn. He had often wondered what had become of him. Robert Cohn was a member, through his father, of one of the richest Jewish families in New York, and through his mother of one of the oldest. At the military school where he prepped for Princeton, and played a very good end on the football team, no one had made him race-conscious. No one had ever made him feel he was a Jew, and hence any different from anybody else, until he went to Princeton. He was a nice boy, a friendly boy, and very shy, and it made him bitter. He took it out in boxing, and he came out of Princeton with painful self-consciousness and the flattened nose, and was married by the first girl who was nice to him. He was married five years, had three children, lost most of the fifty thousand dollars his father left him, the balance of the estate having gone to his mother, hardened into a rather unattractive mould under domestic unhappiness with a rich wife; and just when he had made up his mind to leave his wife she left him and went off with a miniature-painter. As he had been thinking for months about leaving his wife and had not done it because it would be too cruel to deprive her of himself, her departure was a very healthful shock. The divorce was arranged and Robert Cohn went out to the Coast. In California he fell among literary people and, as he still had a little of the fifty thousand left, in a short time he was backing a review of the Arts. The review commenced publication in Carmel, California, and finished in Provincetown, Massachusetts. By that time Cohn, who had been regarded purely as an angel, and whose name had appeared on the editorial page merely as a member of the advisory board, had become the sole editor. It was his money and he discovered he liked the authority of editing. He was sorry when the magazine became too expensive and he had to give it up. By that time, though, he had other things to worry about. He had been taken in hand by a lady who hoped to rise with the magazine. She was very forceful, and Cohn never had a chance of not being taken in hand. Also he was sure that he loved her. When this lady saw that the magazine was not going to rise, she became a little disgusted with Cohn and decided that she might as well get what there was to get while there was still something available, so she urged that they go to Europe, where Cohn could write. They came to Europe, where the lady had been educated, and stayed three years. During these three years, the first spent in travel, the last two in Paris, Robert Cohn had two friends, Braddocks and myself. Braddocks was his literary friend. I was his tennis friend. The lady who had him, her name was Frances, found toward the end of the second year that her looks were going, and her attitude toward Robert changed from one of careless possession and exploitation to the absolute determination that he should marry her. During this time Roberts mother had settled an allowance on him, about three hundred dollars a month. During two years and a half I do not believe that Robert Cohn looked at another woman. He was fairly happy, except that, like many people living in Europe, he would rather have been in America, and he had discovered writing. He wrote a novel, and it was not really such a bad novel as the critics later called it, although it was a very poor novel. He read many books, played bridge, played tennis, and boxed at a local gymnasium. I first became aware of his ladys attitude toward him one night after the three of us had dined together. We had dined at lAvenues and afterward went to the Café de Versailles for coffee. We had several fines after the coffee, and I said I must be going. Cohn had been talking about the two of us going off somewhere on a weekend trip. He wanted to get out of town and get in a good walk. I suggested we fly to Strasbourg and walk up to Saint Odile, or somewhere or other in Alsace. I know a girl in Strasbourg who can show us the town, I said. Somebody kicked me under the table. I thought it was accidental and went on: Shes been there two years and knows everything there is to know about the town. Shes a swell girl. I was kicked again under the table and, looking, saw Frances, Roberts lady, her chin lifting and her face hardening. Hell, I said, why go to Strasbourg? We could go up to Bruges, or to the Ardennes. Cohn looked relieved. I was not kicked again. I said good-night and went out. Cohn said he wanted to buy a paper and would walk to the corner with me. For Gods sake, he said, why did you say that about that girl in Strasbourg for? Didnt you see Frances? No, why should I? If I know an American girl that lives in Strasbourg what the hell is it to Frances? It doesnt make any difference. Any girl. I couldnt go, that would be all. Dont be silly. You dont know Frances. Any girl at all. Didnt you see the way she looked? Oh, well, I said, lets go to Senlis. Dont get sore. Im not sore. Senlis is a good place and we can stay at the Grand Cerf and take a hike in the woods and come home. Good, that will be fine. Well, Ill see you to-morrow at the courts, I said. Good-night, Jake, he said, and started back to the café. You forgot to get your paper, I said. Thats so. He walked with me up to the kiosque at the corner. You are not sore, are you, Jake? He turned with the paper in his hand. No, why should I be? See you at tennis, he said. I watched him walk back to the café holding his paper. I rather liked him and evidently she led him quite a life.',
  bookUrl: 'https://i0.wp.com/christopherwink.com/wp-content/uploads/2018/05/the-sun-also-rises-scribner-classics-cover.jpg?resize=625%2C1051',
  bookUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTIdUZmwDQu1RVbtnujiHrVhLI2yAFHwJWz-A0hSHJq7GYvVi2WLxC6If3gyuOzlP8yUlQc7T10WBO45GfO9TPWRXXJgF9Pz5CCLuwW_eCwMmeummJc557C&usqp=CAc',
  year: 1926,
  sentimentRank: null
}
];



const seed = async () => {

  await db.sync({force: true})

  await Promise.all(titles.map(title => { return Title.create(title)}))

  // seed your database here!
  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })