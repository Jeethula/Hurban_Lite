import { request, gql } from 'graphql-request'

const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/clrqi508n28nq01wdvcohgc3j/master"

const getSlider = async ()=>{

const document = gql`
query Sliders {
    sliders {
      id
      name
      image {
        url
      }
    }
  }
  
`
const result = await request(MASTER_URL, document)
return result

}

const getCatogory = async ()=>{

    const document = gql`
    query getCatogeory {
        categories {
          id
          name
          icon {
            url
          }
        }
      }
      
      
    `
    const result = await request(MASTER_URL, document)
    return result
    
    }

    const getBusinessList = async ()=>{

        const document = gql`
        query getBusinesslist {
            businnesLists {
              id
              name
              email
              contactperson
              category {
                name
              }
              address
              about
              image {
                url
              }
            }
          }
        `
        const result = await request(MASTER_URL, document)
        return result
        
        }

    const getBusinessListByCatagory = async (category)=>{

        const document = gql`
        query getBusinesslist {
            businnesLists(where: {category: {name: "`+ category+`"}}) {
              id
              name
              email
              contactperson
              category {
                name
              }
              address
              about
              image {
                url
              }
            }
          }
        `
        const result = await request(MASTER_URL, document)
        return result

    }

    const getUserBookings = async (userEmail)=>{

      const document = gql`
      query getUserBooking {
        bookings(orderBy: updatedAt_DESC, where: {userEmail: "`+userEmail+`"}) {
          time
          userEmail
          userName
          bookingStatus
          date
          id
          businnesLists {
            id
            image {
              url
            }
            name
            address
            contactperson
            email
            about
          }
        }
      }
      
      `
      const result = await request(MASTER_URL, document)
      return result

  }

    const CreateBooking = async (data)=>{

      const mutationQuery = gql`
      mutation CreateBooking {
        createBooking(
          data: 
          {bookingStatus: Booked,
             businnesLists: {connect: {id: "`+data.businessId+`"}}, 
             date: "`+data.date+`", 
             time: "`+data.time+`", 
             userEmail: "`+data.userEmail+`", 
             userName: "`+data.userName+`"
            }
        ) {
          id
        }
        publishManyBookings(to: PUBLISHED) {
          count
        }
      }
      
      `
      const result = await request(MASTER_URL, mutationQuery)
      return result

  }

export default{
    getSlider,
    getCatogory,
    getBusinessList,
    getBusinessListByCatagory,
    CreateBooking,
    getUserBookings
}