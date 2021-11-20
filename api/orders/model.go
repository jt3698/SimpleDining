package orders

import "go.mongodb.org/mongo-driver/bson/primitive"

type Item struct{
	name string `bson:"name"`
	price string `bson:"price"`
	avatar_url string `bson:"avatar_url"`
	quantity string `bson:"quantity"`
}

type Order struct {
	ID primitive.ObjectID   `bson:"_id"`
	list []Item `bson:"list"`
}
