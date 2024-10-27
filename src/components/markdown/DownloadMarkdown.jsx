import PropTypes from 'prop-types'

export default function DownloadMarkdown({ id }) {
  return (
    <div>
      <a href={`/markdown/${id}.md`} download={`${id}.md`}>Download {id}</a>
    </div>
  )
}

DownloadMarkdown.propTypes = {
    id: PropTypes.string.isRequired,
}