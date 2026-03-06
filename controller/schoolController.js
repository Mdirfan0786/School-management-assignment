import db from "../config/db.js";
import { calculateDistance } from "../utils/distance.js";

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const sql =
    "INSERT INTO schools (name,address,latitude,longitude) VALUES (?,?,?,?)";

  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(201).json({
      message: "School added successfully",
    });
  });
};

export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  db.query("SELECT * FROM schools", (err, results) => {
    if (err) return res.status(500).json(err);

    const sortedSchools = results
      .map((school) => {
        const distance = calculateDistance(
          latitude,
          longitude,
          school.latitude,
          school.longitude,
        );

        return { ...school, distance };
      })
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  });
};
