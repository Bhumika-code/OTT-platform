import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonDetails } from "../../services/PersonDetails";
import Search from "../searchresults/SearchResult";
import SVGLoader from "../../components/SvgLoader";
const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
interface Person {
  id: number;
  name: string;
  birthday: string;
  biography: string;
  place_of_birth: string;
  profile_path: string;
  known_for_department: string;
}

const PersonDetailsCast = () => {
  const { id } = useParams();
  const [personDetails, setPersonDetails] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPersonDetails(id)
        .then((response) => {
          setPersonDetails(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching person details:", error);
          setLoading(false);
        });
    }
  }, [id]);
  return (
    <div className="dashboard-container">
      {loading ? (
        <div className="loader-container">
          <SVGLoader />
        </div>
      ) : (
        <>
          <Search />

          {personDetails ? (
            <div className="movie-details-flex-container">
              <img
                src={`${IMAGE_BASE_URL}${personDetails.profile_path}`}
                alt={` Poster`}
                className="movie-card-images"
              />
              <div className="movie-card-details-page">
                <h2 className="details-title">{personDetails.name}</h2>
                <p className="tag-line">{personDetails.known_for_department}</p>
                <div className="details-grid">
                  <div>
                    <p>Date-of-birth</p>
                    <p>{personDetails.birthday}</p>
                  </div>
                  <div>
                    <p>Place-of-birth</p>
                    <p>{personDetails.place_of_birth}</p>
                  </div>
                </div>
                <div className="details-container">
                  <h1 className="synopsis-header">Biography</h1>
                  <p className="synopsis-overview">{personDetails.biography}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
    </div>
  );
};

export default PersonDetailsCast;
