import { UserRole, AuthProvider, SubscriptionPlan, SubscriptionStatus, FileType, CitationStyle, CitationSourceType, ChatMessageRole, ChatSessionType, GeminiModel, NotebookStatus, PdfAnnotationType, TicketStatus, TicketPriority, TicketCategory } from '../enums';
export interface IUser {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatar?: string;
    role: UserRole;
    provider: AuthProvider;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface ISubscription {
    id: string;
    userId: string;
    plan: SubscriptionPlan;
    status: SubscriptionStatus;
    stripeCustomerId?: string;
    stripeSubscriptionId?: string;
    currentPeriodStart: string;
    currentPeriodEnd: string;
    cancelAtPeriodEnd: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface IPlanDetails {
    plan: SubscriptionPlan;
    name: string;
    price: number;
    currency: string;
    interval: 'month' | 'year';
    features: string[];
    limits: IPlanLimits;
}
export type LimitPeriod = 'daily' | 'monthly';
export interface IPlanLimits {
    maxFiles: number;
    maxNotebooks: number;
    maxFileSizeMb: number;
    maxStorageMb: number;
    dailyAiTokenBudget: number;
    hasProAccess: boolean;
}
export interface IAiTokenUsage {
    userId: string;
    dayKey: string;
    flashInputTokens: number;
    flashOutputTokens: number;
    proInputTokens: number;
    proOutputTokens: number;
    weightedTokensUsed: number;
}
export interface IFolderColumn {
    id: string;
    name: string;
    instruction?: string;
}
export interface IFolder {
    id: string;
    userId: string;
    name: string;
    color: string;
    columns: IFolderColumn[];
    fileCount: number;
    createdAt: string;
    updatedAt: string;
}
export interface ILibraryFile {
    id: string;
    userId: string;
    folderId?: string;
    originalName: string;
    storagePath: string;
    mimeType: string;
    size: number;
    fileType: FileType;
    metadata: IFileMetadata;
    isRead: boolean;
    rating?: number;
    colorLabel?: string;
    lastViewedAt?: string;
    createdAt: string;
    updatedAt: string;
}
export interface IFileMetadata {
    [key: string]: string | undefined;
}
export interface ILibrarySettings {
    id: string;
    userId: string;
    globalColumns: IFolderColumn[];
    createdAt: string;
    updatedAt: string;
}
export interface IParaphraseCountry {
    code: string;
    label: string;
}
export interface IParaphraseLanguage {
    code: string;
    label: string;
    countries: IParaphraseCountry[];
}
export declare const PARAPHRASE_LANGUAGES: IParaphraseLanguage[];
export interface IParaphraseResult {
    id: string;
    userId: string;
    originalText: string;
    paraphrasedText: string;
    mode: string;
    length: number;
    variation: number;
    locale: string;
    createdAt: string;
}
export interface ICitation {
    id: string;
    userId: string;
    style: CitationStyle;
    sourceType: CitationSourceType;
    sourceData: ICitationSourceData;
    formattedCitation: string;
    inTextCitation: string;
    createdAt: string;
    updatedAt: string;
}
export interface ICitationSourceData {
    title: string;
    authors?: string[];
    year?: number;
    journal?: string;
    volume?: string;
    issue?: string;
    pages?: string;
    doi?: string;
    url?: string;
    publisher?: string;
    edition?: string;
    accessDate?: string;
}
export interface IChatSession {
    id: string;
    userId: string;
    fileId?: string;
    folderId?: string;
    sessionType: ChatSessionType;
    model: GeminiModel;
    title: string;
    messageCount: number;
    createdAt: string;
    updatedAt: string;
}
export interface IChatMessage {
    id: string;
    sessionId: string;
    role: ChatMessageRole;
    content: string;
    citations?: IChatCitation[];
    createdAt: string;
}
export interface IChatCitation {
    text: string;
    page: number;
    highlight?: string;
}
export interface IPdfAnnotation {
    id: string;
    fileId: string;
    userId: string;
    page: number;
    type: PdfAnnotationType;
    color: string;
    content?: string;
    rects: IPdfAnnotationRect[];
    selectedText?: string;
    createdAt: string;
    updatedAt: string;
}
export interface IPdfAnnotationRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface INotebookFolder {
    id: string;
    userId: string;
    name: string;
    notebookCount: number;
    createdAt: string;
    updatedAt: string;
}
export interface INotebook {
    id: string;
    userId: string;
    folderId?: string;
    title: string;
    content: string;
    status: NotebookStatus;
    wordCount: number;
    createdAt: string;
    updatedAt: string;
}
export interface ITicket {
    id: string;
    userId: string;
    subject: string;
    description: string;
    status: TicketStatus;
    priority: TicketPriority;
    category: TicketCategory;
    adminNotes?: string;
    createdAt: string;
    updatedAt: string;
}
export interface ITicketMessage {
    id: string;
    ticketId: string;
    userId: string;
    content: string;
    isAdminReply: boolean;
    createdAt: string;
}
export interface IAdminStats {
    totalUsers: number;
    activeUsers: number;
    totalTickets: number;
    openTickets: number;
    resolvedTickets: number;
    usersByPlan: Record<string, number>;
    usersByRole: Record<string, number>;
    ticketsByCategory: Record<string, number>;
    recentRegistrations: number;
    totalRevenue: number;
    monthlyRevenue: number;
    totalRefunds: number;
    activeDiscountCodes: number;
}
import { StudyDatabase, StudyAccessStatus } from '../enums';
export interface IStudyResult {
    id: string;
    title: string;
    authors: string[];
    abstract?: string;
    year?: number;
    doi?: string;
    journal?: string;
    volume?: string;
    issue?: string;
    pages?: string;
    citationCount?: number;
    relevanceScore?: number;
    source: StudyDatabase;
    accessStatus: StudyAccessStatus;
    urls: IStudyUrl[];
}
export interface IStudyUrl {
    type: 'pdf' | 'html' | 'doi' | 'source';
    url: string;
    label: string;
}
export interface IStudySearchResult {
    query: string;
    databases: StudyDatabase[];
    results: IStudyResult[];
    duplicatesRemoved: number;
    totalByDatabase: Record<string, number>;
}
export interface IStudyOpenAccessResult {
    doi: string;
    found: boolean;
    urls: IStudyUrl[];
}
import { PaymentStatus, DiscountCodeType } from '../enums';
export interface IPayment {
    id: string;
    userId: string;
    stripePaymentIntentId: string;
    amount: number;
    currency: string;
    status: PaymentStatus;
    plan: SubscriptionPlan;
    discountCodeId?: string;
    discountAmount: number;
    refundedAmount: number;
    stripeInvoiceId?: string;
    description?: string;
    createdAt: string;
    updatedAt: string;
}
export interface IDiscountCode {
    id: string;
    code: string;
    type: DiscountCodeType;
    value: number;
    maxUses: number;
    currentUses: number;
    validFrom: string;
    validUntil?: string;
    applicablePlans: SubscriptionPlan[];
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
//# sourceMappingURL=index.d.ts.map