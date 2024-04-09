import Review from "@/components/review";

export default function Reviews() {
  const reviews = [
    {
      name: "Cassidi Bunes",
      date: "January 11, 2024",
      rating: 5,
      description:
        "We had no water for a day and a half and we couldn’t get a plumber out to our house so this morning I started to call every single plumber in the area. Dave was the first one to answer and I have to say what a blessing! He said he was just up at apex and would be down soon. In my mind I figured end of the day. But no, Dave was here within the hour and was extremely polite, knowledgeable, fast, efficient, trustworthy, friendly and VERY PROFESSIONAL. We will be saving his card for future plumbing needs and sharing his info with our friends and family. Thank you Dave for saving our butts and making our weekend!",
    },
    {
      name: "H Mazzoli",
      date: "January 20, 2024",
      rating: 5,
      description:
        "Amazing service from Dave ! We’ve used Dave for 16 years and he is absolutely reliable and trustworthy.  We have referred Dave to every person we know who needs servicing. He is so professional and tidy. Best tradesperson I have ever met!",
    },
    {
      name: "Jennifer Andersion",
      date: "January 24, 2024",
      rating: 5,
      description:
        "Excellent service! I highly recommend Dave, he responded quickly(on a Friday afternoon), was very helpful on the phone and drove up to Apex to fix our burst pipe on Saturday morning for a very reasonable price.",
    },
    {
      name: "L Stewart",
      date: "January 7, 2024",
      rating: 5,
      description:
        "Dave was great. He repiped drainage, and water piping in crawlspace. Also dealt with some old troublesome cast iron and poly b removal.",
    },
  ];

  return (
    <div className="mx-10 mt-24">
      <div>
        <div className="space-y-10 text-text-gray mx-auto text-lg px-10 max-w-md md:max-w-6xl pb-4">
          <h1 className="text-5xl font-bold text-text-blue text-center px-6 pt-4 max-w-xl mx-auto">
            Reviews for KVR Plumbing & Gas
          </h1>
          <div className="flex">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta-orange p-4 rounded-2xl mx-auto"
              href="https://www.google.com/maps/place/KVR+Plumbing+and+Gas/@49.4839772,-123.9637152,7z/data=!4m12!1m2!2m1!1skvr+plumbing+and+gas!3m8!1s0xa49ac26bad7a597f:0x7aa26bf93ecec84b!8m2!3d49.596935!4d-119.578889!9m1!1b1!15sChRrdnIgcGx1bWJpbmcgYW5kIGdhc1oWIhRrdnIgcGx1bWJpbmcgYW5kIGdhc5IBB3BsdW1iZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTkVkRkJ4VnpCblJSQULgAQA!16s%2Fg%2F11vrhtbdtd?entry=ttu"
            >
              <p className="text-text-white text-2xl">Leave a review</p>
            </a>
          </div>
          {reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              date={review.date}
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
