import React from "react"
import { Card, Image } from "semantic-ui-react"

const Results = ({ results }) => {
  console.log(results)

  return (
    <Card.Group centered>
      {results.Page.media.map(item => {
        const {
          id,
          genres,
          episodes,
          format,
          title,
          coverImage,
          averageScore,
          startDate,
          endDate,
          description,
        } = item
        const header = title.userPreferred || title.english || title.romaji
        return (
          // <Card
          //   image={coverImage.large}
          //   header={header}
          //   style={{ maxHeight: "600px" }}
          //   meta={
          //     episodes === null || format === "MOVIE"
          //       ? format
          //       : `${format} | ${episodes} episodes`
          //   }
          //   description={description}
          //   key={id}
          // />

          <Card key={id}>
            <Image src={coverImage.large} />
            <Card.Content>
              <Card.Header>{header}</Card.Header>
              <Card.Meta>
                {episodes === null || format === "MOVIE"
                  ? format
                  : `${format} | ${episodes} episodes`}
              </Card.Meta>
              <Card.Description
                style={{ maxHeight: "300px", overflow: "auto" }}
              >
                {description}
              </Card.Description>
            </Card.Content>
          </Card>
        )
      })}
    </Card.Group>
  )
}

export default Results
