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
import randall from '../../public/authorimages/randall.jpg'
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


const authorsData = [
    { 
        id: 1, 
        img:a,
        name: 'Agatha Christie', 
        books: ['Book 1', 'Book 2', 'Book 3'], 
        description:"Master of mystery, weaving intricate puzzles with timeless allure."
    },
    { 
        id: 2,
        img:haruki, 
        name: 'Haruki Murakami', 
        books: ['Book 4', 'Book 5'],
        description:"Enigmatic storyteller capturing the surreal with poetic precision and depth." 
    },
    { 
        id: 5,
        img:stephenking, 
        name: 'Stephen King', 
        books: ['Book 6'],
        description:"Horror maestro, conjuring nightmares with his chilling literary prowess."  
    },
    { 
        id: 3, 
        img:jk,
        name: 'J.K. Rowling', 
        books: ['Book 6'],
        description:"Imaginative wizardess crafting enchanting tales of magic and friendship."  
    },
    { 
        id: 4, 
        img:ernest,
        name: 'Ernest Hemingway', 
        books: [''],
        description:"Bold prose, capturing the essence of life with profound simplicity."  
    },
    { 
        id: 6, 
        img:golding,
        name: 'William Golding', 
        books: [''],
        description:"Insightful observer, unveiling the darkness within human nature's depths."  
    },
    { 
        id: 7, 
        img:wilde,
        name: 'Oscar Wilde', 
        books: [''],
        description:"Witty wordsmith, defying conventions with his sparkling literary brilliance."  
    },
    { 
        id: 8, 
        img:orwell,
        name: 'George Orwell', 
        books: [''],
        description:"Provocative visionary, exposing the perils of totalitarianism with foresight."  
    },
    { 
        id: 9, 
        img:doyle,
        name: 'Sir Arthur Conan Doyle', 
        books: [''],
        description:"Brilliant detective creator, unraveling mysteries with unmatched literary finesse."  
    },
    { 
        id: 10, 
        img:jane,
        name: 'Jane Austen', 
        books: [''],
        description:"Regency wordsmith, crafting timeless tales of love and social satire."  
    },
    { 
        id: 11, 
        img:salinger,
        name: 'J.D. Salinger', 
        books: [''],
        description:"Reclusive wordsmith, delving into the anguish of adolescent isolation."  
    },
    { 
        id: 12, 
        img:green,
        name: 'John Green', 
        books: [''],
        description:"Emotional storyteller, exploring love, loss, and the human condition."  
    },
    { 
        id: 13, 
        img:robin,
        name: 'Robin S. Sharma', 
        books: [''],
        description:"Motivational guru, inspiring personal transformation and leadership excellence."  
    },
    { 
        id: 14, 
        img:randall,
        name: 'Randall Munroe', 
        books: [''],
        description:"Curious comic artist, blending science and humor with creativity."  
    },
    { 
        id: 15, 
        img:hoover,
        name: 'Colleen Hoover', 
        books: [''],
        description:"Emotional architect, weaving poignant love stories that resonate deeply."  
    },
    { 
        id: 16, 
        img:eljames,
        name: 'E.L. James', 
        books: [''],
        description:"Provocative author, igniting passions with steamy tales of desire."  
    },
    { 
        id: 17, 
        img:paulo,
        name: 'Paulo Coelho', 
        books: [''],
        description:"Spiritual wordsmith, guiding souls on transformative journeys of self-discovery."  
    },
    { 
        id: 18, 
        img:harper,
        name: 'Harper Lee', 
        books: [''],
        description:"Compelling storyteller, confronting prejudice with compassion and enduring wisdom."  
    },
    { 
        id: 19, 
        img:hawking,
        name: 'Stephen Hawking', 
        books: [''],
        description:"Brilliant physicist, unraveling the mysteries of the cosmos with intellect."  
    },
    { 
        id: 20, 
        img:jay,
        name: 'Jay Asher', 
        books: [''],
        description:"Intriguing storyteller, delving into the complexities of human connections."  
    }, 
    { 
        id: 21, 
        img:khaled,
        name: 'Kaled Hosseini', 
        books: [''],
        description:"Emotional weaver, painting poignant tales of love, loss, and redemption."  
    },
    { 
        id: 22, 
        img:bach,
        name: 'Richard Bach', 
        books: [''],
        description:"Dreamer and philosopher, soaring through the realms of imagination and enlightenment."  
    }, 
    { 
        id: 23, 
        img:yuval,
        name: 'Yuval Noah Harari', 
        books: [''],
        description:"Visionary historian, illuminating the past and future of humankind."  
    },
    { 
        id: 24, 
        img:kiyo,
        name: 'Robert T. Kiyosaki', 
        books: [''],
        description:"Financial mentor, empowering individuals to achieve wealth and prosperity."  
    },
    { 
        id: 25, 
        img:bronte,
        name: 'Emily Bronte', 
        books: [''],
        description:"Passionate novelist, weaving dark and haunting tales of love."  
    },
    { 
        id: 26, 
        img:kafka,
        name: 'Franz Kafka', 
        books: [''],
        description:"Surreal literary genius, exploring the complexities of human existence."  
    },
    { 
        id: 27, 
        img:shakespeare,
        name: 'William Shakespeare',  
        books: [''],
        description:"Timeless playwright, crafting poetic masterpieces that transcend generations and cultures."  
    },

]

export default authorsData;


// { 
//     id: "", 
//     img:a,
//     name: '', 
//     books: [''],
//     description:""  
// },