import PropTypes from 'prop-types'

export default function DownloadMarkdown({ id }) {
  return (
    <>
      <a href={`/markdown/${id}.md`} download={`${id}.md`} className="hover:underline">Download {id}</a>
    </>
  )
}

DownloadMarkdown.propTypes = {
    id: PropTypes.string.isRequired,
}