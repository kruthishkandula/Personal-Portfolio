import { Icons } from '../Constants/Icons'

const profileData = {
    Name: 'Kruthish Kandula',
    Designation: ['Full-stack Developer', 'React Developer', 'Nodejs Developer', 'DevOps'],
    Skills: [
        { name: 'React', icon: Icons.React },
        { name: 'Node.js', icon: Icons.Nodejs },
        { name: 'ReactNative', icon: Icons.ReactNative },
        { name: 'DevOps', icon: Icons.DevOps },
    ],
    imageUrl: require('../assets/Images/profileImage.jpg'),
    backgroundImageUrl: 'https://miro.medium.com/v2/resize:fit:1100/0*2-iTXwPN4xjD5U3F',
    linkedinUrl: 'https://www.linkedin.com/in/kruthish-kandula-1123ba226',
    mailUrl: 'kruthishkandula1@gmail.com',
    githubUrl: 'https://github.com/kruthishkandula'
}

export default profileData