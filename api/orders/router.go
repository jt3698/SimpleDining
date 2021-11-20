package orders

import (
	"github.com/gin-gonic/gin"
)

func Routes(route *gin.Engine) {
	orders := route.Group("/orders")
	orders.POST("/", insertOrder)
	orders.GET("/", getAllOrders)
	orders.GET("/:id", getOrderByID)
}
