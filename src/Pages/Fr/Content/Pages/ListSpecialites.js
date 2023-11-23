import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";

export default function ListSpecialites() {
  const [specialites, setSpecialites] = useState([]);

  useEffect(() => {
    fetchSpecialites();
  }, []);

  const fetchSpecialites = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/specialite");
      setSpecialites(response.data.specialites);
    } catch (error) {
      console.error("Erreur lors de la récupération des spécialités :", error);
    }
  };

  const deleteSpecialite = async (id) => {
    const isConfirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      return result.isConfirmed;
    });

    if (!isConfirm) {
      return;
    }

    try {
      await axios.delete(`http://localhost:8000/api/specialite/${id}`);
      Swal.fire({
        icon: "success",
        text: "Specialité deleted successfully",
      });
      fetchSpecialites();
    } catch (error) {
      Swal.fire({
        text: "Error deleting specialité",
        icon: "error",
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link
            className="btn btn-primary mb-2 float-end"
            to="/specialite/create"
          >
            Create Specialité
          </Link>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>NomSpec</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {specialites.length > 0 &&
                    specialites.map((specialite, key) => (
                      <tr key={key}>
                        <td>{specialite.NomSpec}</td>
                        <td>
                          <Link
                            to={`/specialite/edit/${specialite.IdSpec}`}
                            className="btn btn-success me-2"
                          >
                            Edit
                          </Link>
                          <Button
                            onClick={() => deleteSpecialite(specialite.IdSpec)}
                            style={{ fontSize: '0.875rem', padding: '0.25rem 0.5rem' }}
                            size="sm"
                            variant="danger"
                          >
                            {/* il faut IdSpec */}
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
