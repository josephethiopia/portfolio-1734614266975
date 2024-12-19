
import { content } from '../content/data'
import HomeComponent from '../components/Home'

export default function HomePage() {
    return <HomeComponent content={content.home} />
}