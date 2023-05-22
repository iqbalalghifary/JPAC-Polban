import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styles/Mitra.css";
import Section from "../../HOC/Section";

const images = [
  {
    id: 1,
    src: "https://ecs7.tokopedia.net/img/attachment/2019/10/14/40768394/40768394_a4b8c9ee-581e-4be6-b320-b467276927ec.jpg",
    alt: "Image 1",
    title: "Tokopedia",
    link: "/page1",
  },
  {
    id: 2,
    src: "https://seeklogo.com/images/S/shopee-logo-DD5CAE562A-seeklogo.com.png",
    alt: "Image 2",
    title: "Shopee",
    link: "/page2",
  },
  {
    id: 3,
    src: "https://i0.wp.com/ebizmark.id/wp-content/uploads/2022/09/Ebizmark.jpg?fit=1380%2C1380&ssl=1",
    alt: "Image 3",
    title: "Ebizmark",
    link: "/page3",
  },
  // Tambahkan lebih banyak objek gambar jika diperlukan
];

function Mitra() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Section id="mitra">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 mb-4 mt-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Cari berdasarkan judul"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="input-group-append">
                <button className="btn btn-primary search-button" type="button">
                  <i className="fas fa-search search-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {filteredImages.map((image) => (
            <div className="col-md-2 mb-4 mt-4" key={image.id}>
              <Link to={image.link}>
                <div className="card">
                  <img src={image.src} alt={image.alt} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{image.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Mitra;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Search from "@material-ui/icons/Search";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

// import Section from "../../HOC/Section";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   searchInput: {
//     marginRight: theme.spacing(2),
//   },
//   searchButton: {
//     marginLeft: theme.spacing(2),
//   },
//   card: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//   },
// }));

// const images = [
//   {
//     id: 1,
//     src: "https://ecs7.tokopedia.net/img/attachment/2019/10/14/40768394/40768394_a4b8c9ee-581e-4be6-b320-b467276927ec.jpg",
//     alt: "Image 1",
//     title: "Tokopedia",
//     link: "/page1",
//   },
//   // Tambahkan lebih banyak objek gambar jika diperlukan
// ];

// function Mitra() {
//   const classes = useStyles();
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredImages = images.filter((image) =>
//     image.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Section id="mitra">
//       <div className={classes.root}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
//             <TextField
//               className={classes.searchInput}
//               variant="outlined"
//               placeholder="Cari berdasarkan judul"
//               value={searchTerm}
//               onChange={handleSearch}
//             />
//             <Button
//               className={classes.searchButton}
//               variant="contained"
//               color="primary"
//               disableElevation
//               startIcon={<Search />}
//             >
//               Cari
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2}>
//           {filteredImages.map((image) => (
//             <Grid item xs={6} sm={4} md={3} lg={2} xl={2} key={image.id}>
//               <Link to={image.link}>
//                 <Card className={classes.card}>
//                   <img src={image.src} alt={image.alt} className="card-img-top" />
//                   <CardContent>
//                     <Typography variant="h6" component="h3">
//                       {image.title}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </Section>
//   );
// }

// export default Mitra;
