import agatha from "../assets/authorimages/agatha.jpg";
import franz from "../assets/authorimages/franz.jpg";
import haruki from "../assets/authorimages/haruki.jpg";
import stephenking from "../assets/authorimages/stephenking.jpg";
import jk from "../assets/authorimages/jk.webp";
import ernest from "../assets/authorimages/ernesthem.jpg";
import golding from "../assets/authorimages/golding.webp";
import wilde from "../assets/authorimages/wilde.webp";
import orwell from "../assets/authorimages/orwell.jpg";
import doyle from "../assets/authorimages/doyle.jpg";
import jane from "../assets/authorimages/austen.jpg";
import salinger from "../assets/authorimages/salinger.jpg";
import green from "../assets/authorimages/johngreen.jpg";
import robin from "../assets/authorimages/rs.jpg";
import randall from "../assets/authorimages/randall.webp";
import hoover from "../assets/authorimages/Colleenhoover.webp";
import eljames from "../assets/authorimages/El james.webp";
import paulo from "../assets/authorimages/paulo.jpg";
import harper from "../assets/authorimages/harper.jpg";
import hawking from "../assets/authorimages/hawking.jpg";
import jay from "../assets/authorimages/j asher.jpg";
import khaled from "../assets/authorimages/hosseini.jpg";
import bach from "../assets/authorimages/bach.jpg";
import yuval from "../assets/authorimages/yuval.jpg";
import kiyo from "../assets/authorimages/kiyo.jpg";
import bronte from "../assets/authorimages/emily.jpg";
import shakespeare from "../assets/authorimages/Shakespeare.jpg";
import brandon from "../assets/authorimages/brndon.jpg"
import frank from "../assets/authorimages/frank.webp"
import blake from "../assets/authorimages/BlakeCrouch.jpg"
import andy from "../assets/authorimages/andy.webp"
import Taylor from "../assets/authorimages/Taylor Jenkins Reid.jpg"
import liu from "../assets/authorimages/liu.jpg"
import hanya from "../assets/authorimages/hanya.jpg"



const AuthorInfo = [
  {
    id: 1,
    img: agatha,
    name: "Agatha Christie",
    born: "in Torquay, Devon, England, The United Kingdom. September 15, 1890 ",
    died: "January 12, 1976",
    website: "http://uk.agathachristie.com/",
    genre: "Mystery, Crime, Thriller",
    influences:
      "Edgar Allan Poe, Anna Katherine Green, Sir Arthur Conan Doyle, G.K. Chesterton",
    about: `The Queen of Crime, captivated readers with her brilliant mind and intricate mysteries. Her iconic detectives, like Hercule Poirot and Miss Marple, became household names. Her plot twists and suspenseful storytelling keep readers guessing until the final reveal. Agatha Christie's legacy as a master of crime fiction remains unparalleled.`,
  },
  {
    id: 26,
    img: franz,
    name: "Franz Kafka",
    born: "in Prague, Bohemia, Austria-Hungary,Czech Republic. July 03, 1883",
    died: "June 03, 1924",
    website: "",
    genre: "Fiction, Philosophy, Short Stories",
    influences:
      "Franz Werfel, Knut Hamsun, Robert Walser, Anton Chekhov, Søren Kierkegaard, Fyodor Dostoevsky, Charles Dickens, August Strindberg, Gustave Flaubert, Heinrich von Kleist, Octave Mirbeau",
    about: `A renowned Czech-born writer, crafted enigmatic narratives that unveiled the labyrinthine depths of the human psyche. His haunting prose delved into the realms of absurdity and alienation, leaving readers captivated by the existential dilemmas his characters faced. Kafka's works, such as "The Metamorphosis" and "The Trial," continue to resonate, serving as poignant reminders of the complexities of modern existence.`,
  },
  {
    id: 27,
    img: shakespeare,
    name: "William Shakespeare",
    born: "Stratford-upon-Avon, Warwickshire, England. April, 1564",
    died: "April 23, 1616",
    website: "",
    genre: "Theatre, Classics, Poetry",
    influences:
      "Ovid, Homer, Thomas Kyd, Christopher Marlowe, Lucius Annaeus Seneca",
    about: `The Bard of Avon, remains an immortal figure in the realm of literature. His eloquent words and timeless plays have captivated audiences for centuries, revealing profound insights into human nature. Shakespeare's genius continues to inspire and ignite the imaginations of both scholars and theatergoers worldwide.`,
  },
  {
    id: 25,
    img: bronte,
    name: "Emily Bronte",
    born: "in Thornton, Yorkshire, England. July 30, 1818",
    died: "December 19, 1848",
    website: "",
    genre: "Fiction, Poetry",
    influences:
      "Charlotte Brontë, Anne Brontë, Shakespeare, Mary Shelley, John Milton, Walter Scott, Lord Byron ",
    about: `A brilliant and enigmatic writer of the 19th century, captivated readers with her timeless novel "Wuthering Heights." Through her haunting prose, she delved deep into the human psyche, exploring themes of love, passion, and the dark complexities of the human soul, leaving an indelible mark on the world of literature. Her legacy continues to inspire and intrigue readers to this day.`,
  },
  {
    id: 4,
    img: ernest,
    name: "Ernest Hemingway",
    born: "in Oak Park, Illinois, The United States. July 21, 1899",
    died: "July 02, 1961",
    website: "",
    genre: "Fiction",
    influences:
      "Mark Twain, Rudyard Kipling, Anton Chekhov, Theodore Roosevelt, Henry David Thoreau, Ivan Turgenev, Flaubert, Leo Tolstoy, Stendhal, Dostoyevsky, Cézanne ",
    about: `A renowned American author and journalist, left an indelible mark on literature with his minimalist writing style. His vivid storytelling and honest portrayal of human struggles captivated readers worldwide, cementing him as a literary legend of the 20th century. Hemingway's works continue to inspire and resonate, showcasing the enduring power of his words.`,
  },
  {
    id: 7,
    img: wilde,
    name: "Oscar Wilde",
    born: "in Dublin, Ireland. October 16, 1854",
    died: "November 30, 1900",
    website: "http://www.cmgww.com/historic/wilde/",
    genre: "Theatre, Poetry, Humor and Comedy, Fiction, Children's",
    influences:
      "Balzac, Walter Pater, Edgar Allan Poe, John Ruskin, Peter Kropotkin, Lewis Carroll, Robert Louis Stevenson",
    about: `The witty and enigmatic playwright, captivated audiences with his sparkling charm and razor-sharp intellect. His flamboyant style and biting satire challenged societal norms, leaving an indelible mark on literature and the art of wit. Through his timeless works, Wilde continues to inspire and provoke, forever celebrated as a literary icon.`,
  },
  {
    id: 11,
    img: salinger,
    name: "J.D. Salinger",
    born: "in Manhattan, New York, The United States. January 01, 1919",
    died: "January 27, 2010",
    website: "",
    genre: "Literature & Fiction, Short Stories",
    influences:
      "Sherwood Anderson, Anton Chekhov, F. Scott Fitzgerald, Gustave Flaubert",
    about: `An enigmatic literary figure, captivated readers with his timeless masterpiece "The Catcher in the Rye." Through his introspective protagonist, Holden Caulfield, Salinger explored themes of alienation and adolescent angst, leaving an indelible mark on generations of readers. His reclusive nature and refusal to embrace fame only added to the mystique surrounding his work, cementing Salinger's status as a literary icon.`,
  },
  {
    id: 8,
    img: orwell,
    name: "George Orwell",
    born: "in Motihari, Bihar, India. June 25, 1903",
    died: "January 21, 1950",
    website: "http://www.george-orwell.org/",
    genre: "Fiction, Politics, Journalism",
    influences:
      "Charles Dickens, Jonathan Swift, Charles Reade, Yevgeny Zamyatin, Gustave Flaubert, Wells, Upton Sinclair, Jack London, Tobias Smollett, Henry Fielding, Compton Mackenzie",
    about: `A renowned British author, left an indelible mark on literature with his powerful works. Through classics like "1984" and "Animal Farm," he unveiled a dystopian vision and warned against the dangers of totalitarianism, inspiring generations to question authority and cherish freedom. Orwell's insightful storytelling continues to resonate, provoking contemplation on the complexities of society and the importance of truth.`,
  },
  {
    id: 2,
    img: haruki,
    name: "Haruki Murakami",
    born: "in Kyoto, Japan. January 12, 1949",
    died: "",
    website: "http://www.harukimurakami.com",
    genre: "Fiction, Surrealism, Magical Realism",
    influences:
      "Franz Kafka, Fyodor Dostoevsky, Francis Scott Fitzgerald, Salinger, Raymond Carver, Kurt Vonnegut, Richard Brautigan, Jack Kerouac, Raymond Chandler, Stephen King, John Irving",
    about: `The acclaimed Japanese author, weaves intricate tales that blur the boundaries of reality and fantasy. His mesmerizing prose captivates readers, drawing them into enigmatic worlds where characters embark on profound introspection and unearth the mysteries of life. Murakami's unique storytelling style has made him a literary icon, enchanting audiences across the globe.`,
  },
  {
    id: 5,
    img: stephenking,
    name: "Stephen King",
    born: "in Portland, Maine, The United States. September 21, 1947",
    died: "",
    website: "http://www.stephenking.com",
    genre: "Horror, Mystery, Literature & Fiction",
    influences:
      "Robert Bloch, Ray Bradbury, Charles Dickens, Shirley Jackson, H.P. Lovecraft, John D. MacDonald, Richard Matheson, J.R.R. Tolkien ",
    about: `The master of horror, continues to captivate readers with his twisted tales that delve deep into the shadows of the human psyche. With an uncanny ability to create vivid and haunting worlds, King's novels have become timeless classics, cementing his place as a literary icon. His chilling narratives and unforgettable characters have earned him a rightful throne as the unrivaled king of the macabre.`,
  },
  {
    id: 3,
    img: jk,
    name: "J.K. Rowling",
    born: "in Yate, South Gloucestershire, England, The United Kingdom. July 31, 1965",
    died: "",
    website: "http://www.jkrowling.com",
    genre: "Fiction, Young Adult, Fantasy",
    influences: "Jane Austen, Geoffrey Chaucer, Oscar Wilde, C.S. Lewis",
    about: `A renowned author whose imaginative wizarding world captivated millions of readers around the globe. With her exceptional storytelling and intricate character development, she brought to life the enchanting realm of Harry Potter, inspiring generations of young minds to embrace the power of imagination. Rowling's literary prowess and her dedication to philanthropy make her an enduring literary icon.`,
  },
  {
    id: 6,
    img: golding,
    name: "William Golding",
    born: "in St. Columb Minor, Cornwall. September 19, 1911",
    died: "June 19, 1993",
    website: "http://www.william-golding.co.uk/",
    genre: "Literature & Fiction",
    influences: "Euripides, R.M. Ballantyne",
    about: `The esteemed British author, crafted literary worlds that delved into the complexities of human nature. Through works like "Lord of the Flies," he unraveled the dark undercurrents that exist within society, challenging readers to confront the innate savagery within us all. Golding's profound storytelling continues to captivate and provoke introspection long after his time.`,
  },
  {
    id: 9,
    img: doyle,
    name: "Sir Arthur Conan Doyle",
    born: "in Edinburgh, Scotland. May 22, 1859",
    died: "July 07, 1930",
    website: "http://www.sherlockholmesonline.org/",
    genre: "Fiction, Crime, Thriller",
    influences:
      "Edgar Allan Poe, Joseph McCabe, Jules Verne, Walter Scott, Thomas Babington Macaulay, Robert Louis Stevenson, Fortuné du Boisgobey, Joseph Bell. Charles Altamont Doyle, Roger Casement, J.M. Barrie, Andrew Lang",
    about: `A brilliant writer who brought the iconic detective Sherlock Holmes to life. With his intricate mysteries and keen eye for detail, Doyle captivated readers worldwide. His legacy as the master of crime fiction remains timeless, ensuring his place among the literary greats.`,
  },
  {
    id: 10,
    img: jane,
    name: "Jane Austen",
    born: "in Steventon Rectory, Hampshire, England, The United Kingdom. December 16, 1775",
    died: "July 18, 1817",
    website: "http://www.janeausten.org/",
    genre: "Fiction, Romance, Humor and Comedy",
    influences:
      "Frances Burney, Mary Brunton, Samuel Johnson, Samuel Richardson, Maria Edgeworth",
    about: `A celebrated 19th-century novelist, crafted timeless tales of love, society, and human nature with wit and insight. Her works, including "Pride and Prejudice" and "Sense and Sensibility," have become literary classics, enchanting readers with their enduring charm. Austen's perceptive observations and engaging storytelling continue to captivate audiences worldwide.`,
  },
  {
    id: 12,
    img: green,
    name: "John Green",
    born: "in Indianapolis, The United States. August 24, 1977",
    died: "",
    website: "http://www.johngreenbooks.com/",
    genre: "Literature & Fiction, Young Adult, Young Adult Romance",
    influences:
      "J.D. Salinger, Herman Melville, F. Scott Fitzgerald, David Foster Wallace, Walt Whitman",
    about: `A popular contemporary author, has gained widespread acclaim for his emotionally resonant and thought-provoking young adult novels. With books like "The Fault in Our Stars" and "Looking for Alaska," Green skillfully explores themes of love, loss, and the complexities of teenage life, leaving a lasting impact on readers of all ages. His storytelling prowess and relatable characters have solidified his position as a beloved figure in the literary world.`,
  },
  {
    id: 13,
    img: robin,
    name: "Robin S. Sharma",
    born: "Port Hawkesbury, Canada. June 16,1964",
    died: "",
    website: "http://www.robinsharma.com/",
    genre: "Self Help, Psychology",
    influences: "",
    about: `A renowned author and motivational speaker, has inspired millions with his profound insights on personal development and leadership. With best-selling books like "The Monk Who Sold His Ferrari" and "The 5 AM Club," Sharma empowers individuals to unlock their full potential and live extraordinary lives. Through his compelling teachings, Sharma has become a catalyst for positive change and a guiding light for those seeking personal and professional transformation.`,
  },
  {
    id: 14,
    img: randall,
    name: "Randall Munroe",
    born: "in Easton, Pennsylvania, The United States. October 17,1984 ",
    died: "",
    website: "http://xkcd.com/",
    genre: "Comics & Graphic Novels",
    influences: "",
    about: `A brilliant writer and cartoonist, is best known for his webcomic "xkcd" that blends science, humor, and thought-provoking insights. His unique ability to simplify complex concepts through stick-figure drawings has garnered a massive following, making him a beloved figure in the world of geek culture. Munroe's work effortlessly combines creativity and intellect, leaving readers both entertained and intellectually stimulated.`,
  },
  {
    id: 15,
    img: hoover,
    name: "Colleen Hoover",
    born: " Sulphur Springs, Texas, United States. December 11, 1979",
    died: "",
    website: "https://colleenhoover.com",
    genre: "Fiction, Romance, Thriller",
    influences: "",
    about: `A prolific contemporary romance author, has captured the hearts of readers with her emotionally charged narratives and complex characters. Her compelling storytelling and ability to delve into raw human emotions have made her novels, such as "It Ends with Us" and "Confess," bestsellers and fan favorites. Hoover's unique blend of romance, heartbreak, and redemption resonates deeply, leaving a lasting impact on her readers.`,
  },
  {
    id: 16,
    img: eljames,
    name: "E.L. James",
    born: "London, The United Kingdom. March 7, 1963 ",
    died: "",
    website: "http://www.eljamesauthor.com",
    genre: "Romance",
    influences: "",
    about: `A bestselling British author, skyrocketed to fame with her erotic romance trilogy "Fifty Shades of Grey." Her provocative storytelling and exploration of taboo themes captivated readers and sparked widespread discussion. James's books became a cultural phenomenon, solidifying her place as a prominent figure in contemporary literature.`,
  },
  {
    id: 17,
    img: paulo,
    name: "Paulo Coehlo",
    born: "in Rio de Janeiro, Brazil. August 24,1947 ",
    died: "",
    website: "http://www.paulocoelhoblog.com",
    genre: "Literature & Fiction, Nonfiction, Biographies & Memoirs",
    influences: "Khalil Gibran Henry Miller Jorge Luis Borges Jorge Amado",
    about: `A globally acclaimed Brazilian author, has captivated readers with his profound and spiritual novels that explore the depths of human existence. His best-selling works, like "The Alchemist" and "Brida," inspire and provoke introspection, encouraging readers to embark on transformative journeys of self-discovery. Coelho's enchanting storytelling and philosophical wisdom have made him a beloved figure in the realm of contemporary literature.`,
  },
  {
    id: 18,
    img: harper,
    name: "Harper Lee",
    born: "in Monroeville, Alabama, The United States. April 28, 1926",
    died: "February 19, 2016",
    website: "http://www.harperlee.com",
    genre: "Literature & Fiction",
    influences: "",
    about: `An American author, left an indelible mark on literature with her iconic novel "To Kill a Mockingbird." Her powerful storytelling illuminated the deep-rooted issues of racial inequality and injustice in the American South. Lee's profound work and strong moral compass have made her an influential figure in the realm of social commentary through fiction.`,
  },
  {
    id: 19,
    img: hawking,
    name: "Stephen Hawking",
    born: "in Oxford, The United Kingdom. January 08, 1942",
    died: "March 14, 2018",
    website: "http://www.hawking.org.uk",
    genre: "Science, Nonfiction",
    influences: "",
    about: `A brilliant theoretical physicist, defied the limits of his physical condition and delved into the mysteries of the universe. His groundbreaking work on black holes and the theory of everything reshaped our understanding of space, time, and the cosmos. Hawking's indomitable spirit and scientific genius left an indelible mark, inspiring generations to explore the wonders of the universe.`,
  },
  {
    id: 20,
    img: jay,
    name: "Jay Asher",
    born: "in Arcadia, California, The United States. September 30,1975",
    died: "",
    website: "http://www.jayasher.blogspot.com/",
    genre: "Young Adult",
    influences: "",
    about: `A compelling contemporary author known for his thought-provoking novels that tackle sensitive subjects with empathy and depth. His debut novel, "Thirteen Reasons Why," garnered widespread acclaim for its honest exploration of teen suicide, sparking important conversations about mental health. Asher's writing style combines emotional resonance with gripping storytelling, making his works resonate long after the final page.`,
  },
  {
    id: 21,
    img: khaled,
    name: "Khaled Hosseini",
    born: "in Kabul, Afghanistan. March 04, 1965",
    died: "",
    website: "http://www.khaledhosseini.com/",
    genre: "Literature & Fiction",
    influences: "",
    about: `An Afghan-born American author, has touched hearts and minds with his powerful storytelling. His novels, such as "The Kite Runner" and "A Thousand Splendid Suns," delve into themes of love, redemption, and the human spirit amidst the backdrop of Afghanistan's turbulent history. Hosseini's evocative prose and empathetic characters have made him a beloved and influential voice in contemporary literature.`,
  },
  {
    id: 22,
    img: bach,
    name: "Richard Back",
    born: "in Oak Park, IL, The United States. June 23, 1936",
    died: "",
    website: "http://richardbach.com/",
    genre: "Literature & Fiction",
    influences: "",
    about: `A renowned American author and pilot, soared beyond the boundaries of conventional thinking with his thought-provoking writings. His masterpiece, "Jonathan Livingston Seagull," inspired readers to embrace personal freedom and pursue their dreams fearlessly. Bach's unique blend of philosophy and storytelling continues to uplift and inspire generations.`,
  },
  {
    id: 23,
    img: yuval,
    name: "Yuval Noah Harari",
    born: "in Kiryat Ata, Israel. February 24, 1976",
    died: "",
    website: "http://www.ynharari.com/",
    genre: "History, Nonfiction",
    influences: "",
    about: `A prominent historian and author, has gained international acclaim for his thought-provoking insights into the past, present, and future of humanity. With best-selling books like "Sapiens" and "Homo Deus," Harari explores the intersections of history, science, and philosophy, challenging conventional notions and sparking new perspectives. Through his captivating writing style, Harari has become a leading voice in contemporary discourse, shaping our understanding of ourselves and the world we inhabit.`,
  },
  {
    id: 24,
    img: kiyo,
    name: "Robert T. Kiyosaki",
    born: "in Hilo, Hawaii, The United States. April 08, 1947",
    died: "",
    website: "http://www.richdad.com/",
    genre: "Business & Investing",
    influences: "",
    about: `A prominent author and entrepreneur, is best known for his groundbreaking book "Rich Dad Poor Dad," which challenges conventional wisdom about wealth and financial independence. With his unique perspective on money, investing, and entrepreneurship, Kiyosaki has inspired millions to adopt a mindset of financial education and wealth creation. Through his work, he empowers individuals to take control of their financial destinies and build a prosperous future.`,
  },
  {
    id:28,
    img:brandon,
    name:"Brandon Sanderson",
    born:"in Lincoln, Nebraska, The United States. December 19,1975 ",
    died:"",
    website:"http://brandonsanderson.com",
    genre:"Science Fiction & Fantasy, Young Adult",
    influences:"",
    about:`A prolific American author, has established himself as a master of epic fantasy and world-building. Known for his intricate magic systems and intricate plot twists, his works, such as the "Mistborn" trilogy and "The Stormlight Archive," have garnered a dedicated following. Sanderson's boundless imagination and meticulous attention to detail make his novels an immersive journey into richly crafted realms.`,
  },
  {
    id:29,
    img:frank,
    name:"Frank Herbert",
    born:"in Tacoma, Washington, The United States. October 08, 1920",
    died:"February 11, 1986",
    website:"http://www.dunenovels.com/",
    genre:"Science Fiction & Fantasy",
    influences:"",
    about:`A visionary science fiction author, created the iconic "Dune" series, a complex and immersive universe set in a distant future. His epic narrative explored themes of power, ecology, and the human psyche, leaving an indelible mark on the genre. Herbert's masterful storytelling and intricate world-building continue to inspire and fascinate readers to this day.`,
    },
    {
      id:30,
      img:blake,
      name:"Blake Crouch",
      born:"Statesville, NC, The United States. October 15, 1978",
      died:"",
      website: "http://www.blakecrouch.com/",
      genre: "Suspense, Thriller, Science Fiction",
      influences:"",
      about:`A gifted American author, is known for his gripping and mind-bending thrillers that push the boundaries of reality. His imaginative storytelling and masterful blend of science fiction and suspense have earned him a dedicated following. With novels like "Dark Matter" and "Recursion," Crouch keeps readers on the edge of their seats, questioning the nature of time and the human experience.`,
    },
    {
      id:31,
      img:andy,
      name:"Andy Weir",
      born:"in Davis, CA, The United States. June 16, 1972",
      died:"",
      website:"http://www.galactanet.com",
      genre:"Science Fiction",
      influences:"",
      about:`A highly acclaimed science fiction author, gained international recognition with his breakthrough novel "The Martian." Known for his meticulous research and scientific accuracy, Weir takes readers on thrilling journeys through space, blending compelling storytelling with plausible science. With his unique ability to combine technical details and gripping narratives, Weir has solidified his place as a prominent voice in the world of science fiction.`,
    },
    {
      id:32,
      img:Taylor,
      name:"Taylor Jenkins Reid",
      born:"Eastern Shore of Maryland. December 20, 1983",
      died:"",
      website:"http://www.taylorjenkinsreid.com",
      genre:"Fiction",
      influences:"",
      about:`A talented contemporary author, weaves intricate narratives that delve into the complexities of human relationships and personal growth. Known for her compelling storytelling and well-crafted characters, Reid's novels like "Daisy Jones & The Six" and "Malibu Rising" have garnered widespread acclaim, resonating with readers across genres. With her unique blend of emotional depth and immersive storytelling, Reid has established herself as a prominent voice in contemporary fiction.`,
    },
    {
      id:33,
      img:liu,
      name:"Liu Cixin",
      born:"Beijing, China. June 23, 1963",
      died:"",
      website:"",
      genre:"Science Fiction",
      influences:"",
      about:`A visionary Chinese author, has redefined science fiction with his thought-provoking and epic novels. His masterpiece, "The Three-Body Problem," earned global acclaim for its ingenious blend of science, philosophy, and gripping storytelling. Liu's imaginative works have propelled him to become one of the most influential voices in contemporary science fiction.`,
    },
    {
      id:34,
      img:hanya,
      name:"Hanya Yanagihara",
      born:"Hawaii, United States. September 20,1974",
      died:"",
      website:"",
      genre:"Literary Fiction",
      influences:"",
      about:`A talented writer of our time, has crafted powerful narratives that delve into complex emotions and human connections. Her acclaimed novel "A Little Life" garnered widespread acclaim for its raw portrayal of friendship, trauma, and resilience. Yanagihara's evocative storytelling leaves a lasting impact, inviting readers to explore the depths of the human experience.`,
    },
];
export default AuthorInfo;

//     {
//     id:"",
//     img:"",
//     name:"",
//     born:"",
//     died:"",
//     website:"",
//     genre:"",
//     influences:"",
//     about:``,
//     },
