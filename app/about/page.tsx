
import { content } from '../../content/data'
import AboutMeComponent from '../../components/AboutMe'

export default function AboutPage() {
    return <AboutMeComponent content={content.aboutMe} />
}