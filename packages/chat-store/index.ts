import type { Messages } from "@repo/types/types";

const EVICTION_TIME = 5 * 60 * 1000;
const EVICTION_CLOCK_TIME = 1 * 60 * 1000;

class ChatMemory {
  private static store: ChatMemory;
  private store: Record<
    string,
    {
      message: Messages[];
      evictionTime: number;
    }
  >;

  private clock: NodeJS.Timeout;

  // we are starting the class with empty store and a interval which will run every EVICTION_CLOCK_TIME ( 1 minutes ) and delete the chat if the time excedded
  constructor() {
    this.store = {};
    this.clock = setInterval(() => {
      Object.entries(this.store).map(([key, { evictionTime }]) => {
        if (evictionTime < Date.now()) {
          this.delete(key);
        }
      });
    }, EVICTION_CLOCK_TIME);
  }

  // cleaning the timeout
  public destroy() {
    clearInterval(this.clock);
  }

  // singeleton for getting the same instance every time
  public static getInstance(): ChatMemory {
    if (!ChatMemory.store) {
      ChatMemory.store = new ChatMemory();
    }
    return ChatMemory.store;
  }

  // getting the chats of a particular chat id
  get(chatId: string): Messages[] {
    return this.store[chatId]?.message ?? [];
  }

  // if the chatid is not stored in the memory then first we are adding it and then pushing the things inside it.
  add(chatId: string, message: Messages) {
    if (!this.store[chatId]) {
      this.store[chatId] = {
        message: [],
        evictionTime: Date.now() + EVICTION_TIME,
      };
    }

    this.store[chatId].message.push(message);
    this.store[chatId].evictionTime = Date.now() + EVICTION_TIME;
  }

  // for deleting the chat from the in memory store
  delete(chatId: string) {
    delete this.store[chatId];
  }
}

export const chatStore = ChatMemory.getInstance();
