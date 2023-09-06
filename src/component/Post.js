import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
    Avatar, Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
} from "@mui/material";
import img1 from "../img/pexels-james-wheeler-414612.jpg";
import img3 from "../img/pexels-suzy-hazelwood-1480347.jpg";
import img4 from "../img/pexels-pixabay-206648.jpg";
import img5 from "../img/pexels-pixabay-462162.jpg";

const cardData= [
    {
        id: 1,
        title:"John Doe",
        image:img1
    },
    {
        id: 2,
        title:"Mickle Jack",
        image:img5
    },
    {
        id: 3,
        title:"Petter Jack",
        image:img3
    },
    {
        id: 4,
        title:"Emmelia patri",
        image:img4
    },
]
const Post = () => {
    return (
        <>
                {
                    cardData.map((item, index) => (
                            <Card sx={{ margin: 5 }} key={item.id}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVert />
                                    </IconButton>
                                }
                                title={item.title}
                                subheader="September 14, 2022"
                            />

                            <CardMedia
                                component="img"
                                height="20%"
                                image={item.image}
                                alt="Paella dish"
                            />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        This impressive paella is a perfect party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of frozen peas along with the
                                        mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="add to favorites">
                                        <Checkbox
                                            icon={<FavoriteBorder />}
                                            checkedIcon={<Favorite sx={{ color: "red" }} />}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="share">
                                        <Share />
                                    </IconButton>
                                </CardActions>
                            </Card>
                    ))
                }

        </>
    );
};

export default Post;
