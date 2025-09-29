import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api/api";

export default function Topics() {
  const { catId } = useParams();
  const [topics, setTopics] = useState([]);
  const [titre, setTitre] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const res = await api.get(`/topics/category/${catId}`);
        setTopics(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTopics();
  }, [catId]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await api.post("/topics", { titre, categorie: catId });
      setTitre("");
      const res = await api.get(`/topics/category/${catId}`);
      setTopics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {topics.map(t => (
          <li key={t._id}>
            <Link to={`/messages/${t._id}`}>{t.titre}</Link>
          </li>
        ))}
      </ul>

      {user && (
        <form onSubmit={handleCreate}>
          <input
            placeholder="New topic title"
            value={titre}
            onChange={e => setTitre(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      )}
    </div>
  );
}
