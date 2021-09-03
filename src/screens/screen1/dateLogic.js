// import React from 'react'
// import db from './../../firebase';

// function dateLogic() {
//   // useEffect(() => {
//   //   if (date !== undefined || null) {
//   //     db.collection("bookingDate")
//   //       .doc(format(date, "dd MMM yyyy").toString())
//   //       .set({
//   //         date: date,
//   //       });

//   //     let bookDate = db
//   //       .collection("bookingDate")
//   //       .doc(format(date, "dd MMM yyyy").toString());

//   //     bookDate.get().then(docSnapshot => {
//   //       if (docSnapshot.exists) {
//   //         bookDate.onSnapshot(doc => {
//   //           //i exist -- do something now
//   //           console.log(doc.data().date.toDate());
//   //         });
//   //       }
//   //     });
//   //   } else {
//   //     console.log("eeor");
//   //   }
//   // }, [date]);

//   //Every unavailable date coming from db
//   useEffect(() => {
//     const getData = async () => {
//       const events = db.collection("bookingDate");
//       events.get().then(querySnapshot => {
//         const allDatesFromDb = querySnapshot.docs.map(doc => {
//           return doc.data().date.toDate();
//         });
//         setExistingDate(allDatesFromDb);
//       });
//     };
//     getData();
//   }, []);

//   //now disable every date thats in that array

//   console.log(existingDate);

//     return (
//         <div>

//         </div>
//     )
// }

// export default dateLogic
