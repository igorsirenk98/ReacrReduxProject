import React from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ProductDetailsCard = (props) => {
	const { product } = props;

	return (
		<>
			{!!Object.entries(product).length
				&& (
					<Card className="card">
						<img
							className="img"
							src={`data:image/jpeg;base64, ${product.largePhoto}`}
							alt={product.name}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{product.name}
							</Typography>
							<Typography>Product Code:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product.productNumber}
							</Typography>
							<Typography>Type:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product['productSubcategory.name']}
							</Typography>
							<Typography>Price:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product.listPrice}$
							</Typography>
							<Typography>Characteristics:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Color: {product.color}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Weight: {product.weight}{product.weightUnitMeasureCode}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Size: {product.size}{product.sizeUnitMeasureCode}
							</Typography>
							<Typography>Description:</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{product.description}
							</Typography>
						</CardContent>
					</Card>
				)}
		</>
	);
};

export default ProductDetailsCard;
