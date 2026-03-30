import { SubscriptionPlan, ParaphraseMode, CitationStyle, CitationSourceType, NotebookStatus, PdfAnnotationType, TicketStatus, TicketPriority, TicketCategory, GeminiModel } from '../enums';
import { IUser, ISubscription, IPlanDetails, IFolder, ILibraryFile, IParaphraseResult, ICitation, ICitationSourceData, IChatSession, IChatMessage, INotebook, INotebookFolder, IPdfAnnotationRect, ITicket, ITicketMessage } from '../interfaces';
export interface IRegisterDto {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    turnstileToken?: string;
}
export interface ILoginDto {
    email: string;
    password: string;
}
export interface IAuthResponseDto {
    user: IUser;
    accessToken: string;
    refreshToken: string;
}
export interface IRefreshTokenDto {
    refreshToken: string;
}
export interface IGoogleAuthDto {
    idToken: string;
}
export interface IForgotPasswordDto {
    email: string;
}
export interface IResetPasswordDto {
    token: string;
    newPassword: string;
}
export interface IUpdateUserDto {
    firstName?: string;
    lastName?: string;
    avatar?: string;
}
export interface IChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export interface IDeleteAccountDto {
    password: string;
}
export interface ICreateSubscriptionDto {
    plan: SubscriptionPlan;
}
export interface ISubscriptionResponseDto extends ISubscription {
    planDetails: IPlanDetails;
}
export interface ICreateFolderDto {
    name: string;
    color?: string;
    columns?: Array<{
        id: string;
        name: string;
        instruction?: string;
    }>;
}
export interface IUpdateFolderDto {
    name?: string;
    color?: string;
    columns?: Array<{
        id: string;
        name: string;
        instruction?: string;
    }>;
}
export interface IUploadFileDto {
    folderId?: string;
}
export interface IUpdateFileDto {
    folderId?: string;
    originalName?: string;
    metadata?: Record<string, string>;
    isRead?: boolean;
    rating?: number | null;
    colorLabel?: string | null;
}
export interface IMoveFilesDto {
    fileIds: string[];
    targetFolderId: string;
}
export interface IGenerateMetadataColumnDto {
    key: string;
    name: string;
    instruction?: string;
}
export interface IGenerateMetadataDto {
    fileId: string;
    columns: IGenerateMetadataColumnDto[];
}
export interface ILibraryFileResponseDto extends ILibraryFile {
    folder?: IFolder;
}
export interface IUpdateLibrarySettingsDto {
    globalColumns: Array<{
        id: string;
        name: string;
        instruction?: string;
    }>;
}
export interface ICheckDuplicateFileDto {
    fileName: string;
    fileSize: number;
}
export interface IDuplicateFileResultDto {
    hasDuplicate: boolean;
    duplicates: Array<Pick<ILibraryFile, 'id' | 'originalName' | 'size' | 'createdAt' | 'folderId'>>;
}
export interface IExportLibraryDto {
    fileIds?: string[];
    folderId?: string;
    scope: 'selection' | 'folder' | 'all';
}
export interface IParaphraseRequestDto {
    text: string;
    mode: ParaphraseMode;
    length: number;
    variation: number;
    locale: string;
}
export interface IParaphraseResponseDto extends IParaphraseResult {
}
export interface ICreateCitationDto {
    style: CitationStyle;
    sourceType: CitationSourceType;
    sourceData: ICitationSourceData;
}
export interface ICreateCitationFromTextDto {
    style: CitationStyle;
    text: string;
}
export interface ICreateCitationFromUrlDto {
    style: CitationStyle;
    url: string;
}
export interface ICreateCitationFromLibraryFileDto {
    style: CitationStyle;
    fileId: string;
    sourceType?: CitationSourceType;
}
export interface ICitationResponseDto extends ICitation {
}
export interface ICreateChatSessionDto {
    fileId: string;
    model?: GeminiModel;
}
export interface ICreateFolderChatSessionDto {
    folderId: string;
    model?: GeminiModel;
    selectedColumns?: string[];
}
export interface ISendChatMessageDto {
    content: string;
    model?: GeminiModel;
}
export interface IChatSessionResponseDto extends IChatSession {
    messages: IChatMessage[];
}
export interface ICreatePdfAnnotationDto {
    fileId: string;
    page: number;
    type: PdfAnnotationType;
    color?: string;
    content?: string;
    rects: IPdfAnnotationRect[];
    selectedText?: string;
}
export interface IUpdatePdfAnnotationDto {
    content?: string;
    color?: string;
    type?: PdfAnnotationType;
}
export interface ICreateNotebookFolderDto {
    name: string;
}
export interface IUpdateNotebookFolderDto {
    name?: string;
}
export interface INotebookFolderResponseDto extends INotebookFolder {
}
export interface ICreateNotebookDto {
    title: string;
    content?: string;
    folderId?: string;
}
export interface IUpdateNotebookDto {
    title?: string;
    content?: string;
    status?: NotebookStatus;
    folderId?: string | null;
}
export interface INotebookResponseDto extends INotebook {
    folder?: INotebookFolder;
}
export type NotebookAiCommand = 'paraphrase' | 'simplify' | 'expand' | 'summarize' | 'write_introduction' | 'write_conclusion' | 'write_opposing_arguments' | 'outline' | 'continue_writing';
export interface IAiCommandDto {
    text: string;
    command: NotebookAiCommand;
}
export interface IAiCommandResponseDto {
    result: string;
    aiTokensConsumed: number;
}
export interface IAiAutocompleteDto {
    text: string;
    cursorPosition: number;
}
export interface IAiAutocompleteResponseDto {
    suggestion: string;
    aiTokensConsumed: number;
}
export interface ICreateTicketDto {
    subject: string;
    description: string;
    priority: TicketPriority;
    category: TicketCategory;
}
export interface IUpdateTicketStatusDto {
    status: TicketStatus;
    adminNotes?: string;
}
export interface ICreateTicketMessageDto {
    content: string;
}
export interface ITicketResponseDto extends ITicket {
    messages: ITicketMessage[];
    user?: IUser;
}
export interface IAdminUserResponseDto extends IUser {
    subscription?: ISubscription;
}
export interface IAdminCreateUserDto {
    email: string;
    firstName: string;
    lastName: string;
}
export interface IAdminCreateUserResponseDto {
    user: IAdminUserResponseDto;
    invitationLink: string;
}
import { StudyDatabase } from '../enums';
import { IStudySearchResult, IStudyOpenAccessResult } from '../interfaces';
export interface IStudySearchDto {
    query: string;
    databases?: StudyDatabase[];
    page?: number;
    limit?: number;
    yearFrom?: number;
    yearTo?: number;
    openAccessOnly?: boolean;
    sortBy?: 'relevance' | 'citations' | 'year_desc' | 'year_asc';
}
export interface IStudySearchResponseDto extends IStudySearchResult {
}
export interface IStudyOpenAccessDto {
    doi: string;
}
export interface IStudyOpenAccessResponseDto extends IStudyOpenAccessResult {
}
import { PaymentStatus, DiscountCodeType } from '../enums';
import { IPayment, IDiscountCode } from '../interfaces';
export interface ICreateCheckoutDto {
    plan: SubscriptionPlan;
    discountCode?: string;
}
export interface ICheckoutResponseDto {
    sessionId: string;
    url: string;
}
export interface IValidateDiscountCodeDto {
    code: string;
    plan: SubscriptionPlan;
}
export interface IValidateDiscountCodeResponseDto {
    valid: boolean;
    discountCode?: IDiscountCode;
    discountedPrice?: number;
    message?: string;
}
export interface IPaymentResponseDto extends IPayment {
    user?: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
    };
}
export interface IRefundDto {
    paymentId: string;
    amount?: number;
    reason?: string;
}
export interface IRefundResponseDto {
    payment: IPaymentResponseDto;
    refundedAmount: number;
}
export interface ICreateDiscountCodeDto {
    code: string;
    type: DiscountCodeType;
    value: number;
    maxUses: number;
    validFrom: string;
    validUntil?: string;
    applicablePlans: SubscriptionPlan[];
}
export interface IUpdateDiscountCodeDto {
    isActive?: boolean;
    maxUses?: number;
    validUntil?: string;
}
export interface IAdminPaymentFiltersDto {
    page?: number;
    limit?: number;
    userId?: string;
    status?: PaymentStatus;
    dateFrom?: string;
    dateTo?: string;
}
export interface IAdminRevenueStatsDto {
    totalRevenue: number;
    monthlyRevenue: number;
    totalRefunds: number;
    paymentsByPlan: Record<string, number>;
    revenueByMonth: Array<{
        month: string;
        revenue: number;
        refunds: number;
    }>;
}
//# sourceMappingURL=index.d.ts.map