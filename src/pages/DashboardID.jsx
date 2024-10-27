import { useParams } from 'react-router-dom'

import DownloadMarkdown from '../components/markdown/DownloadMarkdown'
import Markdown from '../components/markdown/Markdow';

export default function DashboardID() {

    const { id } = useParams();

    return (
        <div>
            <DownloadMarkdown id={id} />
            <Markdown />
        </div>
    )
}
