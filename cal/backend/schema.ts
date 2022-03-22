import { createSchema, list } from "@keystone-next/keystone/schema";
import {
	text,
	relationship,
	password,
	timestamp,
	select,
	integer,
	checkbox,
	json,
} from "@keystone-next/fields";
import { document } from "@keystone-next/fields-document";

import {slug} from './slug';

export const lists = createSchema({
	User: list({
		ui: {
			listView: {
				initialColumns: ["name", "email"],
			},
		},
		fields: {
			name: text({ isRequired: true }),
			email: text({ isRequired: true, isUnique: true }),
			password: password({ isRequired: true }),
			language: text({}),
			country: text({}),
			timezone: text({}),
			meetings: relationship({ ref: "Meeting.user", many: true }),
		},
	}),

	Meeting: list({
		ui: {
			listView: {
				initialColumns: ["user"],
			},
		},
		fields: {
			// meetingtype: option 15 30 60

			meetingtype: select({
				dataType: "integer",
				options: [
					{ label: "15min", value: 15 },
					{ label: "30min", value: 30 },
					{ label: "60min", value: 60 },

					/* ... */
				],

				isRequired: true,

				ui: { displayMode: "select" },
			}),
			date: timestamp({}),
			guestName: text({ isRequired: true }),
			guestEmail: text({ isRequired: true }),
			meetingDesc: text({}),
			user: relationship({ ref: "User.meetings" }),
		},
	}),

	EventType: list({
		ui: {
			listView: {
				initialColumns: ["title"],
			},
		},
		fields: {
			title: text({}),
			slug: slug({name: "slug", from: "title" }),
			description: text({}),
			locations: json({}),
			length: integer({}),
			hidden: checkbox({}),
			user: relationship({ ref: "User" }),
			//userId        Int?

			bookings: relationship({ ref: "Booking" }),

			availability: relationship({ ref: "Availability" }),
			eventName: text({}),
			customInputs: relationship({ ref: "EventTypeCustomInput" }),
			timeZone: text({}),

			periodType: select({
				dataType: "string",
				options: [
					{ label: "unlimited", value: "unlimited" },
					{ label: "rolling", value: "rolling" },
					{ label: "range", value: "range" },

					/* ... */
				],
				defaultValue: "unlimited",
				isRequired: true,

				ui: { displayMode: "select" },
			}),

			// unlimited | rolling | range
			periodStartDate: timestamp({}),
			periodEndDate: timestamp({}),
			periodDays: integer({}), // how many days Invitees can schedule
			periodCountCalendarDays: checkbox({}),
			requiresConfirmation: checkbox({
				defaultValue: true,
			}),
			minimumBookingNotice: integer({
				defaultValue: 120,
			}),
		},
	}),

	Credential: list({
		ui: {
			listView: {
				initialColumns: ["user"],
			},
		},
		fields: {
			type: text({}),
			key: json({}),
			user: relationship({ ref: "User" }),
			// userId : integer({}),
		},
	}),

	Team: list({
		ui: {
			listView: {
				initialColumns: ["name"],
			},
		},
		fields: {
			// meetingtype: option 15 30 60
			name: text({}),
			slug: text({}),
			members: relationship({ ref: "Membership" }),
		},
	}),

	Membership: list({
		ui: {
			listView: {
				initialColumns: ["user"],
			},
		},
		fields: {
			//teamId :integer({}),
			//userId : integer({}),
			accepted: checkbox({ defaultValue: false }),

			role: select({
				dataType: "string",
				options: [
					{ label: "MEMBER", value: "member" },
					{ label: "OWNER", value: "OWNER" },
					/* ... */
				],
				ui: { displayMode: "select" },
			}),

			team: relationship({ ref: "Team" }),
			user: relationship({ ref: "User" }),
		},
	}),

	verificationRequest: list({
		ui: {
			listView: {
				initialColumns: ["identifier"],
			},
		},
		fields: {
			identifier: text({}),
			token: text({ isUnique: true }),
			expires: timestamp({}),
			createdAt: timestamp({}),
			updatedAt: timestamp({}),
		},
	}),

	BookingRef: list({
		ui: {
			listView: {
				initialColumns: ["type", "uid"],
			},
		},
		fields: {
			type: text({}),
			uid: text({}),
			booking: relationship({ ref: "Booking" }),
			//bookingId : integer({}),
		},
	}),

	Attendee: list({
		ui: {
			listView: {
				initialColumns: ["email", "name"],
			},
		},
		fields: {
			email: text({}),
			name: text({}),
			timeZone: text({}),
			booking: relationship({ ref: "Booking" }),
			// bookingId : integer({}),
		},
	}),

	Booking: list({
		ui: {
			listView: {
				initialColumns: ["title"],
			},
		},
		fields: {
			uid: text({ isUnique: true }),
			user: relationship({ ref: "User" }),
			///userId : integer({}),
			references: relationship({ ref: "BookingRef" }),
			eventType: relationship({ ref: "EventType" }),
			// eventTypeId : integer({}),

			title: text({}),
			description: text({}),
			startTime: timestamp({}),
			endTime: timestamp({}),

			attendees: relationship({ ref: "Attendee" }),
			location: text({}),

			createdAt: timestamp({}), //  @default(now())
			updatedAt: timestamp({}),
			confirmed: checkbox({ defaultValue: true }),
			rejected: checkbox({ defaultValue: false }),
		},
	}),

	Availability: list({
		ui: {
			listView: {
				initialColumns: ["label"],
			},
		},
		fields: {
			label: text({}),
			user: relationship({ ref: "User" }),
			//userId : integer({}),
			eventType: relationship({ ref: "EventType" }),
			//eventTypeId: integer({}),
			//days  :        Int[]
			startTime: integer({}),
			endTime: integer({}),
			date: timestamp({}),
		},
	}),

	SelectedCalender: list({
		ui: {
			listView: {
				initialColumns: ["user"],
			},
		},
		fields: {
			user: relationship({ ref: "User" }),
			//userId : integer({}),
			integration: text({}),
			externalId: text({}),
		},
	}),

	ResetPasswordRequest: list({
		ui: {
			listView: {
				initialColumns: ["email"],
			},
		},
		fields: {
			createdAt: timestamp({}),
			updatedAt: timestamp({}),
			email: text({}),
			expires: timestamp({}),
		},
	}),

	RemainderMail: list({
		ui: {
			listView: {
				initialColumns: ["referenceId"],
			},
		},
		fields: {
			referenceId: integer({}),
			reminderType: integer({}),
			elapsedMinutes: integer({}),
			createdAt: timestamp({}),
		},
	}),

	EventTypeCustomInput: list({
		ui: {
			listView: {
				initialColumns: ["label"],
			},
		},
		fields: {
			//eventTypeId : integer({}),
			eventType: relationship({ ref: "EventType" }),
			label: text({}),
			//type    :    EventTypeCustomInputType
			required: checkbox({}),
			placeholder: text({ defaultValue: "" }),
		},
	}),
});
