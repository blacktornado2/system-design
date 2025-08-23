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


 - There are n given meeting rooms
 - Book a meeting in any meeting room at a given interval(start time, end time, capacity)
 - Send notification to all persons invited to the meeting
 - Use a meeting Room Calendar to track the meeting's date and time(current day)


1. Clarify and functional requirements

a) Clarify
 - Same time same room cannot be booked by multiple bookings
 - Do we support recurring meetings?
 - Are cancellations or updates in scope?
 - Do meetings ever span midnight or multi-day?

b) Functional requirements
 - Book a meeting in any of n rooms given(start, end, required capacity)
 - Notify all invited participants
 - Maintain a per-room calendat(for "current day")


2. Use case and API
 - Main API's
 - CreateBooking(roomId, start, end, emails) -> bookingId => Notification sent
 - FindAvailableRooms(start, end, capacity) -> list of room ids which are available
 - CancelBooking(bookingId) -> status
 - ListRoomCalendarForDay

3. Data model and persistence

Room
 - roomId
 - capacity

Booking
 - id
 - roomId
 - startTime
 - endTime
 - attendees
 - createdAt


4. Services

MeetingService
 - Book(start, end, capacity, email)
 - Cancel(bookingId)
 - ListCalendar(date, roomId)

CalendarService
 - isFree(roomId, start, end)
 - book(bookingId)
 - cancel(bookingId)

NotificationService
 - sendNotification(emails)
 - sendCancellation(bookingId)

NotificationService


*/

