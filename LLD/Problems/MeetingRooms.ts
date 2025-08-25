/*

Framework
1. Clarify and Scope Requirements
2. Define Key Use-cases and APIs
3. Data Model & Persistence
4. Core Class Design
5. Identify & Apply Design Patterns
6. Sequence for the MAIN flow
7. Concurrency & consistency
8. Edge cases & Error handling
9. Coding
10. Extensions & Scaling

Problem:
 - There are n given meeting rooms
 - Book a meeting in any meeting room at a given interval(start time, end time, capacity)
 - Send notification to all persons invited to the meeting
 - Use a meeting Room Calendar to track the meeting's date and time(current day)


Solution:
1. Clarify and functional requirements

a) Clarify
 - Same time same room cannot be booked by multiple bookings
 - Do we support recurring meetings? Not now
 - Are cancellations or updates in scope? cancellation yes
 - Do meetings ever span midnight or multi-day?

b) Functional requirements
 - Book a meeting in any of n rooms given(start, end, required capacity)
 - Notify all invited participants
 - Maintain a per-room r(for "current day")


2. Use case and API
 - Main API's
 - CreateBooking(roomId, start, end, emails) -> bookingId => Notification sent
 - FindAvailableRooms(start, end, capacity) -> list of room ids which are available
 - CancelBooking(bookingId) -> status
 - ListRoomCalendarForDay


3. Data model and persistence(database)

Room
 - roomId
 - capacity

Booking
 - bookingId
 - roomId
 - startTime
 - endTime
 - attendees
 - createdAt(default)

API -> Service -> Repository thinking


4. Services

BookingService
 - Book(start, end, capacity, email, IRoomSelectionStrategy)
 - Cancel(bookingId)
 - ListCalendar(date, roomId)

CalendarService
 - isFree(roomId, start, end)
 - book(bookingId)
 - cancel(bookingId)

NotificationService
 - sendNotification(emails)
 - sendCancellation(bookingId)

IRoomSelectionStrategy
 - FirstFitStrategy
 - BEstRoomFitStrategy


5. Design patterns
 - Singleton for NotificationService and CalendarService
 - Observer for notification
 - StrategyPattern for BookingService


6. Sequence/FLow


7. Concurrency
Locking: Acquire a distributed lock(e.g. Redis) on the chosen roomId during availability check & booking
Transactions: Wrap DB write(BookingRepositoy.save) + calendar update (CAlendarService.addEntry) in a single ACID transaction
Retries: On lock contention, retry upto N times with exponential back-off


8. Edge cases and error handling

No room available: return NoAvailability erro
Invalid time interval: start >= end -> BadRequest
Attendee list empty or too large: BadRequest
Notification Failure: Queue retry, if persistent failure, mark booking "Notification Pending"
Clock drift/time-zone skew: normalise all times to UTC at API boundary

9. Code




*/

class Room {
    roomdId: number;
}

class Booking {
    bookingId: number;
}

class RoomRepository {
    Room findById(roomId: number) { }

    findByCapacity(capacity: number) { }
}

class BookingRepository {
    bookingId[] getBookingByRoom(roomId) { }
    Booking findBYId(bookingId: number) { }
}

class BookingService {
    BookingService(CalendarService cs, NotificationService ns)
    number bookMeeting(start, encodeURI, capacity, attendees) { }


    private: 
        CalendarService calendarService;
        NotificationService notificationService;
}