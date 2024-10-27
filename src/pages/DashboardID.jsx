import { useParams } from 'react-router-dom'

import DownloadMarkdown from '../components/markdown/DownloadMarkdown'

export default function DashboardID() {

    const { id } = useParams();

    return (
        <div>
            <DownloadMarkdown id={id} />
        </div>
    )
}
