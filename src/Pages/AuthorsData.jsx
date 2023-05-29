import a from '../../public/authorimages/agatha.jpg'
import haruki from '../../public/authorimages/haruki.jpg'
import stephenking from '../../public/authorimages/stephenking.jpg'
import jk  from '../../public/authorimages/jk.webp'
import ernest from '../../public/authorimages/ernesthem.jpg'
import golding from '../../public/authorimages/golding.webp'
import wilde from '../../public/authorimages/wilde.webp'
import orwell from '../../public/authorimages/orwell.jpg'
import doyle from '../../public/authorimages/doyle.jpg'
import jane from '../../public/authorimages/austen.jpg'
import salinger from '../../public/authorimages/salinger.jpg'
import green from '../../public/authorimages/johngreen.jpg'
import robin from '../../public/authorimages/rs.jpg'
import randall from '../../public/authorimages/randall.webp'
import hoover from '../../public/authorimages/Colleenhoover.webp'
import eljames from '../../public/authorimages/El james.webp'
import paulo from '../../public/authorimages/paulo.jpg'
import harper from '../../public/authorimages/harper.jpg'
import hawking from '../../public/authorimages/hawking.jpg'
import jay from '../../public/authorimages/j asher.jpg'
import khaled from '../../public/authorimages/hosseini.jpg'
import bach from '../../public/authorimages/bach.jpg'
import yuval from '../../public/authorimages/yuval.jpg'
import kiyo from '../../public/authorimages/kiyo.jpg'
import bronte from '../../public/authorimages/emily.jpg'
import kafka from '../../public/authorimages/franz.jpg'
import shakespeare from '../../public/authorimages/Shakespeare.jpg'
import none from '../images/none.jpg'
import murder from '../../src/images/orient.jpg'
import myst from '../../src/images/mysterious.jpg'
import sapiens from '../../src/images/sapiens.jpg';
import deus from "../../src/images/deus.jpg";

const authorsData = [
    { 
        id: 1, 
        img:a,
        name: 'Agatha Christie',
        books: [
            {
                id:1,
                img:none,
                title:"And Then There Were None",
                value:"And then there were none",
                pages:204,
                year:"",
            },
            {
                id:2,
                img:murder,
                title:"	Murder on the Orient Express",
                value:	"Murder on the Orient Express",
                pages:211,
                year:"",
            },
            {
                id:3,
                img:myst,
                title:"The Mysterious Affair at Styles",
                value:"The Mysterious Affair at Styles",
                pages:178,
                year:"",
            },
    ], 
        description:"Master of mystery, weaving intricate puzzles with timeless allure."
    },
    { 
        id: 26, 
        img:kafka,
        name: 'Franz Kafka', 
        books: [
            {
                id:1,
                img:none,
                title:"The Metamorphosis",
                value:"The Metamorphosis",
                pages:204,
                year:"",
            },
            {
                id:2,
                img:murder,
                title:"The Trail",
                value:	"The Trail",
                pages:211,
                year:"",
            },
            {
                id:3,
                img:myst,
                title:"Letter to His Father",
                value:"Letter to His Father",
                pages:178,
                year:"",
            },
            {
                id:4,
                img: "",
                title:"The Castle",
                value:"The Castle",
                pages:"",
                year:"",
            }
        ],
        description:"Surreal literary genius, exploring the complexities of human existence."  
    },
    { 
        id: 27, 
        img:shakespeare,
        name: 'William Shakespeare',  
        books: [
            {
                id:1,
                img:none,
                title:"Hamlet",
                value:"Hamlet",
                pages:"",
                year:"",
            },
            {
                id:2,
                img:none,
                title:"Macbeth",
                value:"Macbeth",
                pages:"",
                year:"",
            },
            {
                id:3,
                img:none,
                title:"Romeo & Juliet",
                value:"Romeo & Juliet",
                pages:"",
                year:"",
            },
            {
                id:4,
                img:none,
                title:"A Midsummer Night's Dream",
                value:"A Midsummer Night's Dream",
                pages:"",
                year:"",
            },
            {
                id:5,
                img:none,
                title:"Othello",
                value:"Othello",
                pages:"",
                year:"",
            },
            {
                id:6,
                img:none,
                title:"Much Ado About Nothing",
                value:"Much Ado About Nothing",
                pages:"",
                year:"",
            },
            {
                id:7,
                img:none,
                title:"King Lear",
                value:"King Lear",
                pages:"",
                year:"",
            },
            {
                id:8,
                img:none,
                title:"The Tempest",
                value:"The Tempest",
                pages:"",
                year:"",
            },
            {
                id:9,
                img:none,
                title:"Julius Caesar",
                value:"Julius Caesar",
                pages:"",
                year:"",
            }

        ],
        description:"Timeless playwright, crafting poetic masterpieces that transcend generations and cultures."  
    },
    { 
        id: 25, 
        img:bronte,
        name: 'Emily Bronte', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            }
        ],
        description:"Passionate novelist, weaving dark and haunting tales of love."  
    },
    { 
        id: 4, 
        img:ernest,
        name: 'Ernest Hemingway', 
        books: [
            {
                id:1,
                img:none,
                title:"And Then There Were None",
                value:"And then there were none",
                pages:204,
                year:"",
            },
            {
                id:2,
                img:murder,
                title:"	Murder on the Orient Express",
                value:	"Murder on the Orient Express",
                pages:211,
                year:"",
            },
            {
                id:3,
                img:myst,
                title:"The Mysterious Affair at Styles",
                value:"The Mysterious Affair at Styles",
                pages:178,
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            }
        ],
        description:"Bold prose, capturing the essence of life with profound simplicity."  
    },
    { 
        id: 7, 
        img:wilde,
        name: 'Oscar Wilde', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            }
        ],
        description:"Witty wordsmith, defying conventions with his sparkling literary brilliance."  
    },
    { 
        id: 11, 
        img:salinger,
        name: 'J.D. Salinger', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Reclusive wordsmith, delving into the anguish of adolescent isolation."  
    },
    { 
        id: 8, 
        img:orwell,
        name: 'George Orwell', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Provocative visionary, exposing the perils of totalitarianism with foresight."  
    },
    { 
        id: 10, 
        img:jane,
        name: 'Jane Austen', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            }
        ],
        description:"Regency wordsmith, crafting timeless tales of love and social satire."  
    },
    { 
        id: 9, 
        img:doyle,
        name: 'Sir Arthur Conan Doyle', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Brilliant detective creator, unraveling mysteries with unmatched literary finesse."  
    },
    { 
        id: 2,
        img:haruki, 
        name: 'Haruki Murakami', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Enigmatic storyteller capturing the surreal with poetic precision and depth." 
    },
    { 
        id: 5,
        img:stephenking, 
        name: 'Stephen King', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Horror maestro, conjuring nightmares with his chilling literary prowess."  
    },
    { 
        id: 3, 
        img:jk,
        name: 'J.K. Rowling', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Imaginative wizardess crafting enchanting tales of magic and friendship."  
    },
    { 
        id: 6, 
        img:golding,
        name: 'William Golding', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Insightful observer, unveiling the darkness within human nature's depths."  
    },

    
    { 
        id: 12, 
        img:green,
        name: 'John Green', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Emotional storyteller, exploring love, loss, and the human condition."  
    },
    { 
        id: 13, 
        img:robin,
        name: 'Robin S. Sharma', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Motivational guru, inspiring personal transformation and leadership excellence."  
    },
    { 
        id: 14, 
        img:randall,
        name: 'Randall Munroe', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Curious comic artist, blending science and humor with creativity."  
    },
    
    { 
        id: 16, 
        img:eljames,
        name: 'E.L. James', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Provocative author, igniting passions with steamy tales of desire."  
    },
    { 
        id: 17, 
        img:paulo,
        name: 'Paulo Coelho', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Spiritual wordsmith, guiding souls on transformative journeys of self-discovery."  
    },
    { 
        id: 18, 
        img:harper,
        name: 'Harper Lee', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Compelling storyteller, confronting prejudice with compassion and enduring wisdom."  
    },
    { 
        id: 19, 
        img:hawking,
        name: 'Stephen Hawking', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Brilliant physicist, unraveling the mysteries of the cosmos with intellect."  
    },
    { 
        id: 20, 
        img:jay,
        name: 'Jay Asher', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Intriguing storyteller, delving into the complexities of human connections."  
    }, 
    { 
        id: 21, 
        img:khaled,
        name: 'Kaled Hosseini', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Emotional weaver, painting poignant tales of love, loss, and redemption."  
    },
    { 
        id: 22, 
        img:bach,
        name: 'Richard Bach', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Dreamer and philosopher, soaring through the realms of imagination and enlightenment."  
    }, 
    { 
        id: 23, 
        img:yuval,
        name: 'Yuval Noah Harari', 
        books: [
            {
                id:1,
                img:sapiens,
                title:"Sapiens",
                value:"Sapiens A Brief History of Humankind",
                pages:331,
                year:"",
            },
            {
                id:"",
                img:deus,
                title:"Homo Deus",
                value:"Homo Deus A brief History of Tomorrow",
                pages:333,
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            }
        ],
        description:"Visionary historian, illuminating the past and future of humankind."  
    },
    { 
        id: 24, 
        img:kiyo,
        name: 'Robert T. Kiyosaki', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Financial mentor, empowering individuals to achieve wealth and prosperity."  
    },
    { 
        id: 15, 
        img:hoover,
        name: 'Colleen Hoover', 
        books: [
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
            {
                id:"",
                img:"",
                title:"",
                value:"",
                pages:"",
                year:"",
            },
        ],
        description:"Emotional architect, weaving poignant love stories that resonate deeply."  
    },



]

export default authorsData;


