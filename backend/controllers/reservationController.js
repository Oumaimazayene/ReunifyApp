const { models } = require("../models/index");
async function createReservation(req, res) {
  try {
    const { salleId, sujet, startTime, endTime, userId } = req.body;

    const reservation = await models.reservation.create({
      salleId,
      startTime,
      endTime,
      sujet,
      userId,
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la réservation" });
  }
}
async function getReservationsBySalleId(salleId) {
  try {
    const reservations = await models.reservation.findAll({
      where: { salleId },
    });
    return reservations;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des réservations de la salle :",
      error
    );
    throw error;
  }
}
const getAllReservation = async (req, res) => {
  try {
    const reservations = await models.reservation.findAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving reservations" });
  }
};

module.exports = {
  createReservation,
  getReservationsBySalleId,
  getAllReservation,
};
