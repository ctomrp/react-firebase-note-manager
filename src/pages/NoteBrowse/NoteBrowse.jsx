import SearchBar from "components/SearchBar/SearchBar"
import NoteList from "containers/NoteList/NoteList"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function NoteBrowse() {
  const noteList = useSelector((store) => store.noteSlice.noteList)
  const [searchTerm, setSearchTerm] = useState('')
  const filteredNoteList = noteList.filter(note => {
    const containtsTitle = note.title.trim().toUpperCase().includes(searchTerm.trim().toUpperCase())
    const containtsContent = note.content.trim().toUpperCase().includes(searchTerm.trim().toUpperCase())
    return containtsTitle ||containtsContent
  })

  return (
    <>
    <div className="row justify-content-center mb-5">
      <div className="col-sm-12 col-md-4">
      <SearchBar onTextChange={setSearchTerm} placeholder={'Search your notes...'} />
      </div>
    </div>
      {
        noteList?.length === 0 && (
          <div className="d-flex justify-content-center">You don't have any note, do you want to&nbsp;
          <Link to={'/note/new'}>create one</Link>
          </div>
        )
      }
      <NoteList noteList={filteredNoteList}/>
    </>
  )
}

export default NoteBrowse