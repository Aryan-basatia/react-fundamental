import { useParams } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();
  return <h1> Project Id: {id}</h1>;
}
