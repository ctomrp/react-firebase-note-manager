import { NoteAPI } from "api/api";
import Header from "components/Header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";

export function App() {
  const dispatch = useDispatch()

  async function fetchAllNotes(){
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList))
  }

  useEffect(()=>{
    fetchAllNotes()
  }, [])
  return (
  <div>
    <Header />
    <Outlet />
  </div>);
}